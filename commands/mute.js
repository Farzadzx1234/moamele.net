const Discord = require("discord.js");
const { realpathSync } = require("fs");
const config = require("../config.json")

module.exports = {
    description: "unmute member",
    category: "moderation",
    testOnly: true,
    slash: true,
    guildOnly: true,

    options: [
        {
            name: "user",
            required: true,
            description: "For Unmute User",
            type: 6,
        },
        {
            name: "reason",
            required: true,
            description: "Whats Reason?",
            type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
        }
    ],
    permissions: ["ADMINISTRATOR"],

    callback: ({interaction}) => {

        var mutedmember = interaction.options.getMember("user");

        if(mutedmember.roles.cache.has(config.mute)) {
            interaction.reply({content: "User Be Movafaghiyat Mute Shod !",  ephemeral: true})
            return;
        } else {

        if (mutedmember.permissions.has("ADMINISTRATOR")) return interaction.reply("Man Nemitonam In User Ra Mute Konam!!!")
        var mutereason = interaction.options.getString("reason") 
        mutedmember.roles.add(config.mute)
        .catch(error => message.reply(`Sorry ${interaction.user.username} Sorry - Man Nemitonam Be Dalil Zir User Ra Mute Konam : ${error}`)); 
        interaction.reply(`${mutedmember.user} Ba Movafaghiyat Tavasot ${interaction.user.username} Va Be Dalil: ${mutereason} Mute Shod`);
    }
}
}