const handlePlaylist = require("../utils/handlePlaylist").handlePlaylist;
const prefix = process.env.PREFIX;
function handleRemoveItems(message, removeItens){
	const client = message.client
	let queue = client.queues.get(message.member.guild.id);
	removeItens.map((value)=>{
		queue.songs.splice(value-1, 1);
		client.queues.set(message.member.guild.id,queue);
	})
	playlist =  handlePlaylist(message)
	if (playlist !== ""){
		message.channel.send(playlist);
	}
}
module.exports = {
	name: 'remove',
	description: 'Remove músicas da playlist',
	args_length:0,
	help: `${prefix}remove ou ${prefix}remove <item1> <item2> ...`,
	async execute(message, args) {
		const client = message.client
		let queue = client.queues.get(message.member.guild.id);
		if (!queue){
			message.channel.send("Sem música tocando no momento");
			return;
		}
		if (args[0]){
			const removeItens = args.sort(function(a,b){ return b.localeCompare(a)});
			handleRemoveItems(message, removeItens)
		}else{
			playlist =  handlePlaylist(message)
			if (playlist !== ""){
				messageContent = "Escolha um dos itens abaixo para ser removido:\n" + playlist;
				await message.channel.send(messageContent);
				
				client.once("message",(newMessage)=>{
					const removeItens = newMessage.content.trim().split(/ +/).sort(function(a,b){ return b.localeCompare(a)});
					
					removeItens.map((value)=>{
						queue.songs.splice(value-1, 1);
						client.queues.set(message.member.guild.id,queue);
					})
					playlist =  handlePlaylist(message)
					if (playlist !== ""){
						message.channel.send(playlist);
					}
				})
			}
		}
		
        
	},
};