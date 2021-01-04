module.exports = {
	name: 'salve',
	description: 'Responde um salve',
	args_length:0,
	help: '!salve',
	execute(message, args) {
		message.channel.send('salve carai');
		
	},
};