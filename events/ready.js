const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("at Server CamaraDerie || My prefix (c.) || Develop By NaufaL-Kun", {type: "PLAYING"});
}
