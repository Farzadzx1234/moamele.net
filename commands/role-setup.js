const Discord = require("discord.js")

module.exports = {
    category: "reaction-role",
    testOnly: true,
    slash: true,
    description: "setup reaction role",
    guildOnly: true,

    callback: ({interaction}) => {
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("reaction")
            .setPlaceholder("Please Select Menu")
            .setOptions([
                {
                    label: "God",
                    description: "God Role",
                    emoji: "🖤",
                    value: "god",
                }, {
                    label: "Devil",
                    emoji: "🖤",
                    description: "Devil Role",
                    value: "devil"
                }
            ])
        )

        const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription("Please select your role :)")

        interaction.reply({embeds: [embed], components: [row]})
    }
}