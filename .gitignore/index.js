const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ("*") 
var embed = new Discord.RichEmbed()
.setColor('#8000ff')
.setAuthor(`NevoBot - commande`)
.addField("*help", "Permet de voir la liste des commandes.")
.addField("*avatar", "Affiche votre avatar.")
.addField("*say", "Reservé aux admins, permet de faire parler Nevo.")
.addField("*ip", "Affiche l'ip du serveur.")
.addField("*membre", "Permet de voir le nombre de")
.setFooter(`Dev par DrawZz | *help`)

bot.on('ready', function() {
    bot.user.setActivity("NevoriusBot | *help");
    console.log("Connectedç");
});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'accueil');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Pseudo : ', `${member}`)
        .addField(':microphone2: | Bienvenue', `Bienvenue sur ce serveur rescapé, ${member}`)
        .addField(':space_invader:| Serveur :', `${member.guild.name}`, true )

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.login(process.env.loginuser);

const client = new Discord.Client();


const newUsers = [];

client.on("ready", () => {
  console.log("I am ready!");
});

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.author.sendEmbed(embed);
        message.channel.sendMessage("Va check t'es DM, je t'ai envoyé la liste!")
    }

    if (message.content === "Salut Nevo"){
        message.reply("Salut jeune mage!");
        console.log ("commande mon chou effectué");
    }
});
bot.on('message', message => {
    if (message.author.discriminator === "9555"){
        if (message.content.startsWith("*say")){
        var args = message.content.substring("*say").split( );
        var bsaymessage = message.content.substr(4);

    message.delete();

    message.channel.sendMessage(bsaymessage);                             
    }
}});

bot.on('message', message => {
    // Le robot lui répondra pong en le mentionnant si il envoie "ping"
    if (message.content === "A plus"){
      // le robot répond "@auteur#1234, Salut l'ami !"
      message.reply("Salut l'ami !");
    };
    // Le robot lui répondra pong si il envoie "ping"
    if (message.content === "ping"){
      // le robot répond "Pong !"
      message.channel.send("Pong !");
    };
    // Le robot lui répondra si l'utilisateur envoie "mp"
    if (message.content == "mp moi"){
      message.author.send("voici un message privé !")
    };
     // Le robot lui répondra ceci si un utilisateur envoie "?avatar"
    if (message.content.startsWith(prefix + "avatar")) {
      message.channel.send(message.author.avatarURL);
    };
  
  })
 
bot.on('message', message => {
    if (message.content === prefix + "ip"){
        message.channel.sendMessage("Nevorius.fr")
    }});

    
