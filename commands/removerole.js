module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('ROLE_ID_HERE');
    const member = message.mentions.members.first();

    member.roles.remove(epicRole);
    message.channel.send('**ROLE BERHASIL DI HAPUS !**')
}

module.exports.config = {
    name: "removerole",
    description: "",
    usage: "c.removerole",
    accessableby: "Members",
    aliases: []
}
