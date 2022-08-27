const Discord = require('discord.js')

module.exports = {
     category: 'Moderation',
  description: 'lock the channel',
  
  slash: true, // Create both a slash and legacy command
  

   guildOnly: true,
  


    callback: ({interaction, user, channel}) => {
if(!interaction.member.permissions.has("MANAGE_CHANNELS")) {
  return interaction.reply({content: "You Dont Have permissions", ephemeral: true})
}
            channel.permissionOverwrites.edit(channel.guild.roles.everyone, { SEND_MESSAGES: false }).catch(err => { 
interaction.reply({content: "پرمیشن ندارم عزیز:)", ephemeral: false})
 })
            const embed = new Discord.MessageEmbed()
            .setTitle("Channel Update Shod")
            .setDescription(`🔒Cahnnel ${channel} Lock Shod`)
            .setColor("ffffff");
            interaction.reply({embeds: [embed], ephemeral: false});
            
    }
}