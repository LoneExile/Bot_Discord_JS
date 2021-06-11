const ytdl = require('discord-ytdl-core')
const Discord = require('discord.js')
const client = new Discord.Client()
const BOT_TOKEN = require('./config/TOKEN')

client.on('ready', () => {
  console.log('ready')
})

client.on('message', (msg) => {
  if (msg.author.bot || !msg.guild) return
  if (msg.content === '#!play') {
    if (!msg.member.voice.channel)
      return msg.channel.send("You're not in a voice channel?")
    let stream = ytdl('https://www.youtube.com/watch?v=QnL5P0tFkwM', {
      filter: 'audioonly',
      opusEncoded: false,
      fmt: 'mp3',
      encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200'],
    })
    //console.log(stream)

    msg.member.voice.channel
      .join()
      .then((connection) => {
        let dispatcher = connection
          .play(stream, {
            type: 'unknown',
          })
          .on('finish', () => {
            msg.guild.me.voice.channel.leave()
          })
      })
      .catch((e) => {
        console.log(e)
      })
  }
})

client.login(BOT_TOKEN)
