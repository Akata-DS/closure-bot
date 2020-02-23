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
    .setTitle('True Silver Slash')
    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setThumbnail('https://cdn.discordapp.com/attachments/677847136695746560/680332813064863967/skill_icon_skchr_svrash_3.png')
    .addField('Regular field title', 'Some value here')
    .addBlankField()
    .addField('Inline field title', 'Some value here', true)
    .addField('Inline field title', 'Some value here', true)
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://cdn.discordapp.com/attachments/677847136695746560/680346359488184342/gh.png')
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
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
