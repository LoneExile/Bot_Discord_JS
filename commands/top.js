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
      var songTopSort = findCount.sort((a, b) => b.count - a.count)
      console.log(songTopSort)
      var text = ''
      songTopSort.length > 5 ? (listTop = 5) : (listTop = songTopSort.length)
      for (let index = 0; index < listTop; index++) {
        text +=
          index +
          1 +
          '. ' +
          `[${songTopSort[index].title}](${songTopSort[index].url})` +
          // songTopSort[index].title +
          ' -- [** ' +
          songTopSort[index].count +
          ' **time ] \n' +
          '```>play ' +
          songTopSort[index].url +
          '```\n'
      }
      // msg.channel.send(text)

      const msgEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Top ${listTop} song`)
        .setDescription(text)

      msg.channel.send(msgEmbed)
      return
    } catch (error) {
      console.log(error)
    }
  },
}
