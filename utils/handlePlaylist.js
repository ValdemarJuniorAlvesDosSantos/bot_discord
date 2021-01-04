
const handlePlaylist = function (message){
    respContent = "";
    client = message.client;
    let queue = client.queues.get(message.member.guild.id);
    if(queue){   
        i =1;         
        queue.songs.map((song)=>{
            respContent = respContent + i + ": "+ song.title +"\n";
            i = i+1;
        });
        
    }
    return respContent;
    
}
module.exports={handlePlaylist};