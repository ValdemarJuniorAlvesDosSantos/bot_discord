const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
	name: 'clone',
	description: 'Cria um clone das sobras do usuário',
	args_length:0,
	help: '!clone',
	async execute(message, args) {
		
		// message.client.user.setUsername(message.author.username);
		const guildMemberBot = await message.guild.members.fetch(message.client.user).then((guildMember)=>{
			return guildMember;
		})
		const guildMemberUser = await message.guild.members.fetch(message).then((guildMember)=>{
			return guildMember;
		})
		
		guildMemberBot.setNickname( guildMemberUser.nickname || message.author.username );
		message.reply("Eu sou você agora!");
		
    	setTimeout(async ()=>{
			
			guildMemberBot.setNickname("FirstBot");
			const canvas = Canvas.createCanvas(1000,834);
			const ctx = canvas.getContext('2d');
			const background = await Canvas.loadImage('./assets/clone_image.jpg');
			
			ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
			ctx.strokeStyle = '#74037b';
			ctx.strokeRect(0, 0, canvas.width, canvas.height);
			// Pick up the pen
			ctx.beginPath();
			// Start the arc to form a circle
			ctx.arc(720, 530, 50, 0, Math.PI * 2, true);
			// Put the pen down
			ctx.closePath();
			// Clip off the region you drew on
			ctx.clip();
			
			
			const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));
			
			ctx.drawImage(avatar,670, 480, 100, 100);

			const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'eca.png');
			
			
			
			message.channel.send("Muito ruim ser você",attachment);
		},10000)
	},
};