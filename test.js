const ytdl = require('discord-ytdl-core')
const Discord = require('discord.js')
const client = new Discord.Client()
const TOKEN = require('./config/TOKEN')

client.on('ready', () => {
  console.log('ready')
})

client.on('message', (msg) => {
  if (msg.author.bot || !msg.guild) return
  if (msg.content === '!play') {
    if (!msg.member.voice.channel)
      return msg.channel.send("You're not in a voice channel?")
    let stream = ytdl('https://www.youtube.com/watch?v=NlZlcnUW1hc', {
      filter: 'audioonly',
      opusEncoded: true,
      encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200'],
    })
    console.log(stream)
    msg.member.voice.channel.join().then((connection) => {
      let dispatcher = connection
        .play(stream, {
          type: 'opus',
        })
        .on('finish', () => {
          msg.guild.me.voice.channel.leave()
        })
    })
  }
})

client.login(TOKEN)
