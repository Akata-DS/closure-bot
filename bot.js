const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
                        
client.on('ready', () => {
    console.log('COMPLETED');
    client.user.setActivity('Arknights');
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // COMMAND SECTION ===========================================
  if(command === "say", message.member.roles.has('677351882292854825')) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
});

client.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', 'user');
  member.addRole('677515320453365788'); // Customer Role (jgn lupa ganti)
});

client.login(process.env.BOT_TOKEN);
