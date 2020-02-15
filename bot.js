const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", async message => {
  if(message.author.bot) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
