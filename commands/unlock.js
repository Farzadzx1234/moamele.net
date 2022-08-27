const Discord = require('discord.js')

module.exports = {
   category: 'Testing',
  description: 'unlock channel',
  
  slash: true, // Create both a slash and legacy command
  

   guildOnly: true,

    callback: ({interaction, channel}) => {
        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) {
            return interaction.reply({content: "Shoma Permission `MANAGE_CHANNELS` Nadarid 💩", ephemeral: true})
            }
            channel.permissionOverwrites.edit(channel.guild.roles.everyone, { SEND_MESSAGES: true }).catch(err => { interaction.reply({content:"ز من اصرار ز تو انکار / ز من وفا و از تو جفا ... این است رسم مرام؟ :)", ephemeral: true}) })
            const embed = new Discord.MessageEmbed()
            .setTitle("Channel Updated!!")
            .setDescription(`🔓 ${channel}  Unlock Shod`)
            .setColor("#ffffff");
             interaction.reply({embeds: [embed], ephemeral: true});
    }
}