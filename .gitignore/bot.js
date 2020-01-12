// ----------------------------------------- SETTINGS ----------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = ";";
var status = "Test";
var errorlogo = "659504785036148750";
var successlogo = "659504835535831060";
var notallowedmessage = "Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande.";

client.login(process.env.BOT_TOKEN)

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('ready', function(){
    client.user.setActivity(status, {type: "PLAYING"})
})

// ----------------------------------------- TEST ----------------------------------------- //

client.on("message", message=>{
    if(message.content === prefix + "test")
    message.channel.send(emoji(successlogo))
})
