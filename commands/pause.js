const prefix = process.env.PREFIX;
module.exports = {
	name: 'pause',
	description: 'Pausa a musica',
	args_length:0,
	help: `${prefix}pause`,
	execute(message, args) {
        client = message.client
        let queue = client.queues.get(message.member.guild.id);
        if(queue){            
            queue.dispatcher.pause();
        }
        
	},
};