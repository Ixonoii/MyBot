// ----------------------------------------- SETTINGS ----------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var successcolor = "#04f028";
var errorcolor = "#ff0000";
var prefix = ";";
var status = "Being developed by TheMisterPenguin.";

client.login(process.env.BOT_TOKEN)

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('ready', function(){
    client.user.setActivity(status, {type: "PLAYING"})
})

//client.on("message", message =>{
    //let privatechannel = new Discord.RichEmbed()
    //.setTitle(emoji("659504785036148750") + " Veuillez utiliser cette commande sur un serveur.")
    //.setColor(errorcolor)
    //if(!message.guild) return
    //if(message.content === prefix + "test")
   // message.channel.send("Test done!")
//})

// RUNNER

client.login(process.env.TOKENBOT)
