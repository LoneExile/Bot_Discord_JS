module.exports = {
  name: 'stop',
  execute(msg, bot_status) {
    if (bot_status === 'off') {
      return msg.channel.send('bot is offline')
    }
    const serverQueue = msg.client.queue.get(msg.guild.id)
    if (!msg.member.voice.channel)
      return msg.channel.send(
        'You have to be in a voice channel to stop the music!'
      )
    console.log(`--stop ${serverQueue.songs[0].title}`)
    msg.channel.send(`stop ${serverQueue.songs[0].title}`)
    serverQueue.songs = []
    console.log(`--serverQueue.songs in stop have ${serverQueue.songs}`)
    serverQueue.connection.dispatcher.end()
  },
}
