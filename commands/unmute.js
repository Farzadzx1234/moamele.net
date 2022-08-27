const Discord = require("discord.js")
const config = require("../config.json")

module.exports = {
    description: "unmute user",
    category: "moderation",
    testOnly: true,
    slash: true,
    guildOnly: true,

    options: [
        {
            name: "user",
            required: true,
            description: "Unmute Members",
            type: 6,
        }
    ],

    permissions: ["ADMINISTRATOR"],

    callback: ({interaction}) => {

        var unmutedmember = interaction.options.getMember("user")

        if(!unmutedmember.roles.cache.has(config.mute)) {
            interaction.reply({content: "User Unmute Shod ! In Bade", ephemeral: true})
            return;
        } else {

        unmutedmember.roles.remove(config.mute) //if reason, kick
            .catch(error => interaction.reply({ content: `Sorry ${message.author} I couldn't unmute because of : ${error}`, ephemeral: true})); //if error, display error
        interaction.reply({content: `${unmutedmember.user} Ba Movafaghiyat Unmute Shod Tavasot ${interaction.user.username}!`, ephemeral: true});
    
}
    }
}