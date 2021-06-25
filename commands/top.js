const Discord = require('discord.js')
const Count = require('../models/countModels')

module.exports = {
  name: 'top',
  async execute(msg, bot_status) {
    if (bot_status === 'off') {
      return msg.channel.send('bot is offline')
    }

    try {
      findCount = await Count.find().exec()
      var songTop = findCount.map((top) => ({
        song: top.title,
        count: top.count,
      }))

      var songTopSort = songTop.sort((a, b) => b.count - a.count)
      var text = ''
      for (let index = 0; index < 5; index++) {
        text +=
          index +
          1 +
          '. ' +
          songTopSort[index].song +
          ' **[' +
          songTopSort[index].count +
          ' time]** \n'
      }
      //msg.channel.send(text)

      // inside a command, event listener, etc.
      const msgEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Top 5 song')
        .setDescription(text)

      msg.channel.send(msgEmbed)

      //console.log(text)
      return
    } catch (error) {
      console.log(error)
    }
  },
}
