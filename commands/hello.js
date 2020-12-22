module.exports.run = async (bot, message, args) => {
      message.reply('**HELLO KAK, SELAMAT PAGI, SIANG, SORE, MALAM !**')
}

module.exports.config = {
    name: "hello",
    description: "Answers hello",
    usage: "c.hello",
    accessableby: "Members",
    aliases: []
}
