const ytdl = require('discord-ytdl-core')
// const ytdl = require('ytdl-core')

module.exports = {
  name: 'playx',
  async execute(msg, bot_status) {
    if (msg.author.bot || !msg.guild) return

    if (!msg.member.voice.channel)
      return msg.channel.send("You're not in a voice channel?")
    try {
      let stream = await ytdl('https://www.youtube.com/watch?v=NlZlcnUW1hc', {
        filter: 'audioonly',
        opusEncoded: true,
        encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200'],
      })
      console.log('!play')
      console.log(stream)
      msg.member.voice.channel.join().then(async (connection) => {
        let dispatcher = await connection
          .play(stream, {
            type: 'opus',
          })
          .on('finish', () => {
            //msg.guild.me.voice.channel.leave()
            // console.log(dispatcher)
          })
      })
    } catch (error) {
      console.log(error)
    }
    // try {
    //   let stream = ytdl('https://www.youtube.com/watch?v=NlZlcnUW1hc', {
    //     filter: 'audioonly',
    //     opusEncoded: false,
    //     fmt: 'mp3',
    //     encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200'],
    //   })

    //   msg.member.voice.channel.join().then((connection) => {
    //     let dispatcher = connection
    //       .play(stream, {
    //         type: 'unknown',
    //       })
    //       .on('finish', () => {
    //         msg.guild.me.voice.channel.leave()
    //       })
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  },
}
