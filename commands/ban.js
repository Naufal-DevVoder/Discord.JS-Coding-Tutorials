module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("**KAMU TIDAK MEMILIKI AKSES UNTUK BAN**");
    else {
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember){

        try {
            console.log(bannedMember.tag + " Banned");
            message.channel.send (`${bannedMember} **Has Been Banned From Server**`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: "c.ban",
    accessableby: "Admins",
    aliases: []
}
