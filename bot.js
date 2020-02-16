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
    message.channel.send(sayMessage);
  }
  if(command === "pictureBotSend", message.member.roles.has('677351882292854825')) {
    const pictureLink = args.join(" ");
    message.channel.send(new Attachment(pictureLink);
  }
  // START OF EXPERIMENTAL AREA
var emojiname = ["LMD","pastelyellow","pastelgreen","hotpink","purple","orange","peach","pastelpurple","lightblue","red"];
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
