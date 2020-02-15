const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name, 'Customer');
    member.addRole(Customer)
});

client.on("message", async message => {
  if(message.author.bot) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
}

client.login(Njc3NzMzOTg0NzMzNjI2Mzg4.Xke1xw.7dAOp3yOEeoW4vbpgLib-8ScNMI);
