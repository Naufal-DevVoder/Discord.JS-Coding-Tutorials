module.exports.run = async (bot, message, args) => {
    return message.channel.send("**HELLO BRO/SIS AND WELCOME TO SERVER CAMARADERIE**")
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: "c.hi",
    accessableby: "Members",
    aliases: ['h']
}
