const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("NamiBot | *help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut Nami"){
        message.reply("Coucou mon chou ! <3");
        console.log ("commande mon chou effectué");
    }
});
