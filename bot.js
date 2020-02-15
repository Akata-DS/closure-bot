const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.Njc3NzMzOTg0NzMzNjI2Mzg4.Xke1xw.7dAOp3yOEeoW4vbpgLib-8ScNMI);//BOT_TOKEN is the Client Secret
