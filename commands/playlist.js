const handlePlaylist = require("../utils/handlePlaylist").handlePlaylist
const prefix = process.env.PREFIX;
module.exports = {
	name: 'playlist',
	description: 'Mostra a fila de musicas',
	args_length:0,
	help: `${prefix}playlist`,
	execute(message, args) {
		
        client = message.client;
		let queue = client.queues.get(message.member.guild.id);
		if (!queue){
			message.channel.send("Sem música tocando no momento");
			return;
		}

		let res = handlePlaylist(message);
        if(res !== ""){   
			message.channel.send(res);
		}
        
	},
};