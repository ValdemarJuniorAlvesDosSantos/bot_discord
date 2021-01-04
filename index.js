
const fs = require('fs');
const {prefix,token} = require('./config.json');
const Discord = require('discord.js');
const { OpusEncoder } = require('@discordjs/opus');



const client = new Discord.Client();
client.commands = new Discord.Collection();
client.queues = new Map();




client.once('ready', () => {
	console.log('Ready!');
});
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    
	client.commands.set(command.name, command);
}


client.on('message', message => {
    if (message.content[0] !== prefix) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
    
    
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    if (commandName === "play"){
        command.execute(message, args,client);
        
        return;
    }
    
    if (args.length < command.args_length){
        console.log(args.length + " " + command.args_length );
        return;
    }
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});


// login to Discord with your app's token
client.login(token);

