const { OpusEncoder } = require('@discordjs/opus');
const search = require('yt-search');
const ytdl = require('ytdl-core-discord');
const {handlePlaySong } = require("../utils/handlePlaySong");
const prefix = process.env.PREFIX;




module.exports = {
	name: 'play',
	description: 'Toca uma música do youtube',
	args_length:1,
	help: `${prefix}play <nome do aúdio>`,
	async execute (message, args) {
        const client = message.client
        const arg = args.join(" ").replace("+ ", "");;
        try{
            // 
            search(arg,(err,result) =>{
                if (err){
                        throw(err);
                        return;
                }else{
                    if (result && result.videos.length > 0){
                        const song = result.videos[0];
                        
                        message.reply("Encontrei o seguinte audio -> " +  song.url);
                        let queue = client.queues.get(message.member.guild.id);
                        if (queue){
                            if (args[0] === "+"){
                                
                                let atual = queue.songs.shift();
                                queue.songs = [atual, song].concat(queue.songs);
                                
                            }else{
                                queue.songs.push(song);
                            }
                            
                            client.queues.set(message.member.guild.id,queue);
                        }else{
                            handlePlaySong(message,client,song);
                        }
                        
                        
                    }else{
                        message.reply("Encontrei nada não, sorry!")
                    }
                }

            })

        }catch(e){
            console.error(e);
        }
	},
};