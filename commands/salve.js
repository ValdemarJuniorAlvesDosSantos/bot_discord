const prefix = process.env.PREFIX;
module.exports = {
	name: 'salve',
	description: 'Responde um salve',
	args_length:0,
	help: `${prefix}salve`,
	execute(message, args) {
		message.channel.send('salve carai');
		
	},
};