const prefix = process.env.PREFIX;
module.exports = {
	name: 'stop',
	description: 'Da stop nas músicas, e destrói a playlist',
	args_length:0,
	help:`${prefix}stop`,
	execute(message, args) {
        client = message.client
        let queue = client.queues.get(message.member.guild.id);
        if(queue){
			queue.dispatcher.destroy();
        	client.queues.delete(message.member.guild.id);
		}
		
	},
};