const Discord = require('discord.js');
const Canvas = require('canvas');
const prefix = process.env.PREFIX;
module.exports = {
	name: 'commands',
	description: 'Lista os commandos disponíveis',
	args_length:0,
	help:  `${prefix}commands`,
	async execute(message, args) {
		stringMessage = ""
		message.client.commands.map((command)=>{
			stringMessage = stringMessage + "Comando " + command.help +  " ---- "
			stringMessage = stringMessage + command.description +"\n" 
						
		})
		message.channel.send(stringMessage)
	},
};