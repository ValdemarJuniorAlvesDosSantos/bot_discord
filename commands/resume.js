const prefix = process.env.PREFIX;
module.exports = {
	name: 'resume',
	description: 'Despausa a música',
	args_length:0,
	help: `${prefix}resume`,
	execute(message, args) {
        client = message.client
        let queue = client.queues.get(message.member.guild.id);
        if(queue){
            queue.dispatcher.resume();
        }
        
	},
};