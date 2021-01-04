const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
	name: 'commands',
	description: 'Lista os commandos disponíveis',
	args_length:0,
	help: '!clone',
	async execute(message, args) {
		stringMessage = ""
		message.client.commands.map((command)=>{
			stringMessage = stringMessage + "Comando #" + command.name +  " ---- "
			stringMessage = stringMessage + command.description +"\n" 
						
		})
		message.channel.send(stringMessage)
	},
};