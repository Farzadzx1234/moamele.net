const Discord = require("discord.js")
const wokcommands = require("wokcommands")
const { join } = require("path")

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
        console.log("Man Amade Khadamat Resani Hastam")

    new wokcommands(client, {
        commandsDir: join(__dirname, '../commands'),

        testServers: ["1010984316743983195"]
    })
	},
};