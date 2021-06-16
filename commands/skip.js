const Queue = require('../models/queueModels')
module.exports = {
  name: 'skip',
  async execute(msg, bot_status) {
    if (bot_status === 'off') {
      return msg.channel.send('bot is offline')
    }
    const serverQueue = msg.client.queue.get(msg.guild.id)
    if (!msg.member.voice.channel)
      return msg.channel.send(
        'You have to be in a voice channel to stop the music!'
      )
    if (!serverQueue)
      return msg.channel.send('There is no song that I could skip!')

    let songFromDB = await Queue.find().exec()
    let songDB = songFromDB[0]
    msg.channel.send(`skip ${songDB.title}`)
    console.log(`skip ${songDB.title}`)

    serverQueue.connection.dispatcher.end()

    // msg.channel.send(`skip ${serverQueue.songs[0].title}`)
    // console.log(`skip ${serverQueue.songs[0].title}`)
  },
}
