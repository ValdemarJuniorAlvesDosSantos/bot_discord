const fs = require('fs');
const { OpusEncoder } = require('@discordjs/opus');
const { Readable } = require('stream');
const Discord = require('discord.js');
const prefix = process.env.PREFIX;


const SILENCE_FRAME = Buffer.from([0xF8, 0xFF, 0xFE]);

class Silence extends Readable {
  _read() {
    this.push(SILENCE_FRAME);
    this.destroy();
  }
}

module.exports = {
	name: 'ouvir',
	description: 'Ouve alguém',
	args_length:0,
	help: `${prefix}ouvir`,
	async execute(message , args) {
		
  
		const connection = await message.member.voice.channel.join();
		const audio = connection.receiver.createStream(message.member.id, { mode: 'pcm' });
		
		
		audio.pipe(fs.createWriteStream('user_audio.pcm'));
		
		connection.play(new Silence(), { type: 'opus' });
		audio.on("end",()=>{
			console.log("Acabouuuuuuu");
			connection.play(fs.createReadStream("user_audio.pcm"), { type: 'converted' });			
		})
		
		
		
	},
};