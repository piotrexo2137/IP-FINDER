const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';
const fs = require('fs')
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('komendy').filter(file => file.endsWith('.js'));
 
 
client.once('ready', () =>{
    console.log('Bot jest online!');
    client.user.setActivity('PREFIX = "$"', {type: 'CUSTOM_STATUS'});
});
 
for (const file of commandFiles) {
    const command = require(`./komendy/${file}`);
    client.commands.set(command.name, command);
}
 
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(message.channel.id == '937286602554753074') 
    if (command === 'find-pvpsmurf') {
        client.commands.get('find-pvpsmurf').execute(message, args);
    } if (command === 'find-r4azor') {
        client.commands.get('find-r4azor').execute(message, args);
    } if (command === 'find-sheiden') {
        client.commands.get('find-sheiden').execute(message, args);
    } if (command === 'find-muzvk') {
        client.commands.get('find-muzvk').execute(message, args);
    } if (command === 'find-stresserka') {
        client.commands.get('find-stresserka').execute(message, args);
    } if (command === 'find-ambus') {
        client.commands.get('find-ambus').execute(message, args);
    } if (command === 'find-swizuuu') {
        client.commands.get('find-swizuuu').execute(message, args);
    } if (command === 'find-odisss') {
        client.commands.get('find-odisss').execute(message, args);
    } if (command === 'find-mazvr') {
        client.commands.get('find-mazvr').execute(message, args);
    } if (command === 'find-majkig0d') {
        client.commands.get('find-majkig0d').execute(message, args);
    } if (command === 'find-k3wcio') {
        client.commands.get('find-k3wcio').execute(message, args);
    } if (command === 'find-imbirr') {
        client.commands.get('find-imbirr').execute(message, args);
    } if (command === 'find-adiqqq') {
        client.commands.get('find-adiqqq').execute(message, args);
    } if (command === 'find-xrakynn_') {
        client.commands.get('find-xrakynn_').execute(message, args);
    } if (command === 'find-wxnderr') {
        client.commands.get('find-wxnderr').execute(message, args);
    } if (command === 'find-tor1dus') {
        client.commands.get('find-tor1dus').execute(message, args);
    } if (command === 'find-zombiaczekkk') {
        client.commands.get('find-zombiaczekkk').execute(message, args);
    } if (command === 'find-fejmis') {
        client.commands.get('find-fejmis').execute(message, args);
    } if (command === 'find-pvpmany') {
        client.commands.get('find-pvpmany').execute(message, args);
    } if (command === 'find-borys123pl') {
        client.commands.get('find-borys123pl').execute(message, args);
    } if (command === 'find-perpexior') {
        client.commands.get('find-perpexior').execute(message, args);
    } if (command === 'find-pewny_ded') {
        client.commands.get('find-pewny_ded').execute(message, args);
    } if (command === 'find-sklezixon') {
        client.commands.get('find-sklezixon').execute(message, args);
    } if (command === 'find-xavempik') {
        client.commands.get('find-xavempik').execute(message, args);
    } if (command === 'find-w97') {
        client.commands.get('find-w97').execute(message, args);
    } if (command === 'find-elo123_') {
        client.commands.get('find-elo123_').execute(message, args);
    } if (command === 'find-kamilpvp') {
        client.commands.get('find-kamilpvp').execute(message, args);
    } if (command === 'find-uziclickerpl') {
        client.commands.get('find-uziclickerpl').execute(message, args);
    } if (command === 'find-_roteq_') {
        client.commands.get('find-_roteq_').execute(message, args);
    }
});
 
 
client.login('OTM3MDUyMDMyNTk3MTEwODk2.YfWHtg.0IjKrnGy4EtRSZBGRGKV_KXDpLI');