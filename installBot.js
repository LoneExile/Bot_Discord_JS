try {
  if (!fs.existsSync('./config/TOKEN.js')) {
    //file not exists
    var text = "BOT_TOKEN = 'add your token here' \nmodule.exports = BOT_TOKEN"
    fs.appendFile('./config/TOKEN.js', text, function (err) {
      if (err) throw err
      console.log('Saved!')
    })
  }
} catch (err) {
  console.error(err)
}

// test