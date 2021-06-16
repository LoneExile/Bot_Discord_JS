const ytdl = require('ytdl-core')
const { prefix } = require('../config/config')
const Queue = require('../models/queueModels')
const Count = require('../models/countModels')

module.exports = {
  name: 'play',
  description: 'Play a song in your channel!',
  async execute(msg, bot_status) {
    try {
      const args = msg.content.slice(prefix.length).trim().split(/ +/)
      const queue = msg.client.queue
      const serverQueue = msg.client.queue.get(msg.guild.id)

      const voiceChannel = msg.member.voice.channel
      if (bot_status === 'off') {
        return msg.channel.send('bot is offline')
      }
      if (!voiceChannel)
        return msg.channel.send('You must to be in channel to play music!')
      const permissions = voiceChannel.permissionsFor(msg.client.user)
      if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
        return msg.channel.send('I need the permissions to do that dude')
      }

      const songInfo = await ytdl.getInfo(args[1])
      const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
        // textChannel: msg.channel,
        // voiceChannel: voiceChannel,

        //connection: null,
        //playing: true,
        count: 1,
      }
      // console.log(serverQueue)  // info

      if (!serverQueue) {
        const queueContruct = {
          //textChannel: msg.channel,
          //voiceChannel: voiceChannel,
          connection: null,
          //songs: [],
          //volume: 5,
          playing: true,
        }
        queue.set(msg.guild.id, queueContruct)
        // let songFromDB = await Queue.find().exec()
        //queue.set(msg.guild.id, songFromDB)

        //queueContruct.songs.push(song)
        var addSong = await new Queue(song, {})
        addSong.save(function (err) {
          if (err) return handleError(err)
        })
        this.countFunction(song)

        try {
          var connection = await voiceChannel.join()

          queueContruct.connection = connection
          // upDateConnection = await Queue.findByIdAndUpdate(addSong._id, {
          //   connection: true,
          // })

          songFromDB = await Queue.find().exec()
          songDB = songFromDB[0]

          //this.play(msg, queueContruct.songs[0])
          this.play(msg, songDB)
        } catch (err) {
          console.log(err)
          queue.delete(msg.guild.id)
          return msg.channel.send(err)
        }
      } else {
        //serverQueue.songs.push(song)

        var pushSong = await new Queue(song, {})
        pushSong.save(function (err) {
          if (err) return handleError(err)
        })

        this.countFunction(song)

        return msg.channel.send(`${song.title} has been added to the queue!`)
      }
    } catch (error) {
      console.log(error)
      msg.channel.send(error.msg)
    }
  },

  async countFunction(song) {
    findCount = await Count.find().exec()

    haveSongYet = findCount.some(async (inCount) => {
      inCount.title === song.title
    })
    console.log('check have song yet = ', haveSongYet)

    findCount.map(async (inCount) => {
      console.log('find Count = ', inCount.title === song.title && haveSongYet)
      if (inCount.title === song.title && haveSongYet) {
        Count.findByIdAndUpdate(
          inCount._id,
          {
            count: inCount.count + 1,
          },
          function (err, howmuch) {
            if (err) return handleError(err)
            console.log('count on!!')
          }
        )
      } else if (!haveSongYet) {
        var addCountSong = await new Count(song, {})
        addCountSong.save(function (err) {
          if (err) return handleError(err)
          console.log('new song count!!')
        })
      }
    })
  },

  async play(msg, song) {
    const queue = msg.client.queue
    const guild = msg.guild
    //const serverQueue = queue.get(msg.guild.id)

    if (!song) {
      //serverQueue.voiceChannel.leave()
      queue.delete(guild.id)
      return
    }

    let stream = ytdl(song.url, {
      filter: 'audioonly',
      opusEncoded: false,
      fmt: 'mp3',
      encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200'],
    })

    msg.member.voice.channel
      .join()
      .then((connection) => {
        let dispatcher = connection
          .play(stream, {
            type: 'unknown',
          })
          .on('finish', async () => {
            let deletedSong = await Queue.findByIdAndDelete(song._id).exec()
            //console.log('deleted')
            let songFromDBx = await Queue.find().exec()
            let songDBx = songFromDBx[0]
            //console.log('next', songDBx.title)
            this.play(msg, songDBx)

            //serverQueue.songs.shift()
            // this.play(msg, serverQueue.songs[0])
          })
      })
      .catch((e) => {
        console.log(e)
      })
  },
}
