const search = require('yt-search');
const ytdl = require('ytdl-core-discord');
const handlePlaySong = async function (message,client,song){
    let queue = client.queues.get(message.member.guild.id);
    if(!song){
        client = message.client
        let queue = client.queues.get(message.member.guild.id);
        if(queue){
			queue.dispatcher.destroy();
            client.queues.delete(message.member.guild.id);
            queue.connection.disconnect();
		}

    }else{
        if (!message.member.voice.channel) {
            message.channel.send("entra em algum canal de voz ai irmãozinho");
            return;    
        }
       
        if (!queue){
            const connection =  await message.member.voice.channel.join();
            queue = {
                connection:connection,
                dispatcher:null,
                songs:[song]
            };
        }    

        queue.dispatcher = await queue.connection.play(await ytdl(song.url,{
                                                                            highWaterMark:1 << 25,
                                                                                filter:'audioonly',
                                                                                opusEncoded: true

                                                                        }),
                                                                        {
                                                                            type:'opus',
                                                                            highWaterMark: 1,
                                                                        }
        );
        queue.dispatcher.on("finish",()=>{
            queue.songs.shift();
            handlePlaySong(message,client,queue.songs[0]);
        });
        client.queues.set(message.member.guild.id,queue);


    }       
       
        
    
}
module.exports={handlePlaySong};