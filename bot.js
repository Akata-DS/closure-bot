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
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.channel.send(sayMessage);
  }
  if(command === "pictureBotSend") {
    const pictureLink = args.join(" ");
    message.channel.send({files: [pictureLink]});
  }
  const exampleEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setAuthor('SilverAsh', 'https://cdn.discordapp.com/attachments/677847136695746560/680341101533462568/latest.png')
    .setThumbnail('https://cdn.discordapp.com/attachments/677847136695746560/680332813064863967/skill_icon_skchr_svrash_3.png')
    .addField('Skill Name', '**True Silver Slash**', true)
    .addField('Activation', 'Manual Trigger', true)
    .addField('Description', 'DEF -70%; ATK +110%; Range expands; Attacks at most 3 targets simultaneously (regarded as Melee Attack)')
    .setImage('https://cdn.discordapp.com/attachments/573480121592447004/573483824336470019/Will.Graham.600.1584841.jpg')
    .setFooter('⚙ | Page 1/2', 'https://cdn.discordapp.com/attachments/678640993226063891/680969379005202552/Closure.600.2849100.jpg');
  if(command === "embedtest") {
    message.channel.send(exampleEmbed);
  }
  // START OF EXPERIMENTAL AREA
var emojiname = ["PastelPink","PastelYellow","PastelGreen","HotPink","Purple","Orange","Peach","PastelPurple","LightBlue","Red"];
var rolename=["Pastel Pink","Pastel Yellow","Pastel Green","Hot Pink","Purple","Orange","Peach","Pastel Purple","Light Blue","Red"];
client.on('message', msg => {

  if(msg.content.startsWith("reaction")){
    if(!msg.channel.guild) return;
    for(let n in emojiname){
    var emoji =[msg.guild.emojis.find(r => r.name == emojiname[n])];
    for(let i in emoji){
      msg.react(emoji[i]);
    }
   }
  }
  });

client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == emojiname[n]){
    let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
}
});

client.on("messageReactionRemove",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == emojiname[n]){
    let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);   
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  }
});
  // END OF THE EXPERIMENTAL AREA
});

client.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', 'user');
  member.addRole('677515320453365788'); // Customer Role (jgn lupa ganti)
});

client.login(process.env.BOT_TOKEN);
