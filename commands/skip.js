const {handlePlaySong } = require("../utils/handlePlaySong");
const prefix = process.env.PREFIX;
module.exports = {
	name: 'skip',
	description: 'Pula a música',
	args_length:0,
	help: `${prefix}skip`,
	execute(message, args) {
        client = message.client
        let queue = client.queues.get(message.member.guild.id);
        if(queue){

			queue.songs.shift();
			client.queues.set(message.member.guild.id,queue);
			handlePlaySong(message,client,queue.songs[0]);
        }
        
	},
};