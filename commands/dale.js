module.exports = {
	name: 'dale',
	description: 'Chama no dale',
	args_length:0,
	usage: '!dale',
	execute(message, args) {
		message.channel.send('dale '+ message.author.username + "!");
	},
};