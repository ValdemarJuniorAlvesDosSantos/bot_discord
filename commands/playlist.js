module.exports = {
	name: 'playlist',
	description: 'Mostra a fila de musicas',
	args_length:0,
	usage: '!playlist',
	execute(message, args) {
		respContent = "";
        client = message.client;
        let queue = client.queues.get(message.member.guild.id);
        if(queue){   
			i =1;         
            queue.songs.map((song)=>{
				respContent = respContent + i + ": "+ song.title +"\n";
				i = i+1;
			});
			message.channel.send(respContent);
        }
        
	},
};