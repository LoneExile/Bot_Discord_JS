const Discord = require('discord.js')
const Count = require('../models/countModels')

module.exports = {
  name: 'top',
  async execute(msg, bot_status) {
    console.log(bot_status)
    if (bot_status === 'off') {
      return msg.channel.send('bot is offline')
    }

    try {
      findCount = await Count.find().exec()
      // console.log(findCount)
      // var songTop = findCount.map((top) => ({
      //   song: top.title,
      //   count: top.count,
      // }))
      // console.log(songTop)
      // var songTopSort = songTop.sort((a, b) => b.count - a.count)
      var songTopSort = findCount.sort((a, b) => b.count - a.count)
      console.log(songTopSort)
      var text = ''
      for (let index = 0; index < songTopSort.length; index++) {
        text +=
          index +
          1 +
          '. ' +
          songTopSort[index].title +
          ' **[' +
          songTopSort[index].count +
          ' time]** \n'
      }
      // msg.channel.send(text)

      const msgEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Top 5 song')
        .setDescription(text)

      msg.channel.send(msgEmbed)
      return
    } catch (error) {
      console.log(error)
    }
  },
}
