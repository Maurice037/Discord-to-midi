const config = require('./config');
const easymidi = require('easymidi');
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//select output
var outputs = easymidi.getOutputs();
var output = new easymidi.Output(config.devicename);


// Message Event
client.on('message', msg => {

    //content event
    if (msg.content === '!rot') {
        //answer on message 
        msg.reply('puff Party');
        //midi event
        output.send('noteon', {
            note: 0,
            velocity: 127,
            channel: 10//please remove one channel(10 = 9)
        });
    }
});


//Login into discord
client.login(config.token);
