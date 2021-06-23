const Queue = require('../models/queueModels')

module.exports = {
  name: 'stop',
  async execute(msg, bot_status) {
    if (bot_status === 'off') {
      return msg.channel.send('bot is offline')
    }
    const serverQueue = msg.client.queue.get(msg.guild.id)
    if (!msg.member.voice.channel)
      return msg.channel.send(
        'You have to be in a voice channel to stop the music!'
      )

    let songFromDB = await Queue.find().exec()
    let songDB = songFromDB[0]
    console.log('stop com is ', songDB.length !== 0)
    if (songDB.length !== 0) {
      console.log(`--stop ${songDB.title}`)
      msg.channel.send(`stop ${songDB.title}`)
      Queue.deleteMany({}).exec(function (err, post) {
        if (err) throw err
        // console.log(`--stop all song`)
        // msg.channel.send(`stop all song`)
      })
      // map.has(key) – returns true if the key exists, false otherwise. #todo use this instant
    } else if (serverQueue === undefined) {
      return msg.channel.send('no song to stop')
    }
    // console.log(`--stop ${serverQueue.songs[0].title}`)
    // msg.channel.send(`stop ${serverQueue.songs[0].title}`)
    // serverQueue.songs = []
    // console.log(`--serverQueue.songs in stop have ${serverQueue.title}`)
    try {
      serverQueue.connection.dispatcher.end()
    } catch (error) {
      console.log('end is null')
    }
  },
}
