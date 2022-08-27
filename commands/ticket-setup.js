const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    category: "ticket",
    slash: true,
    description: "setup ticket",
    guildOnly: true,
    testOnly: true,

    callback: ({interaction}) => {
        const btn = new MessageActionRow().addComponents(
            new MessageButton()
            .setCustomId("Create")
            .setLabel("Ticket")
            .setEmoji("🎫")
            .setStyle("DANGER")
        )

        let embed = new MessageEmbed()
        .setTitle("🎫TICKET")
        .setDescription("Click For Create Ticket!")
        .setColor("SECONDARY")

        interaction.reply({content: "Ticket Created", ephemeral: true})
        interaction.channel.send({embeds: [embed], components: [btn]})
    }
}