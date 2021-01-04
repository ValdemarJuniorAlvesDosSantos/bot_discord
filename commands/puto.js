const {removeAccents } = require("../utils/removeAccents");

module.exports = {
	name: 'puto',
	description: 'Calcula o quão puto o cara tá',
	args_length :1,
	usage: '!puto <nome>',
	execute(message, args) {
		d = Math.random()*100;
		nome = removeAccents(args[0]).toLowerCase();
		
		if (nome==="fiala"){
			message.channel.send("Fiala tá chapado.");
			return;
		}
		if (nome === "gu" || nome === "mague" || nome === "le" || nome === "alechandre"){
			d = 100;
		}
		message.channel.send(args[0] + ` está ${d.toFixed(0)}% puto!`);
	},
};

