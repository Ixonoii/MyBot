// CONFIGURATION

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
client.login(process.env.BotToken)

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('ready', function(){
    client.user.setActivity("✅ Bot ready to be used!", {type: "PLAYING"})
})

// BOT ADDED & REMOVED

client.on("guildCreate", guild =>{
    var BotAddedEmbed = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle("MyBot has been added on a server.")
    .setDescription(`I am now on ${client.guilds.size} servers !`)
    .setThumbnail(guild.iconURL)
    .addField("Information about the server:", "Name: **" + guild.name + "** (``" + guild.id + "``) \n Members: **" + guild.memberCount + "** \n Owner: **" + guild.owner + "** (``" + guild.ownerID + "``)")
    .setTimestamp()
    client.channels.get("689513780870381568").send(BotAddedEmbed)
})

client.on("guildDelete", guild =>{
    var BotAddedEmbed = new Discord.RichEmbed()
    .setColor("0xf35353")
    .setTitle("MyBot has been removed from a server.")
    .setDescription(`I am now on ${client.guilds.size} servers !`)
    .setThumbnail(guild.iconURL)
    .addField("Information about the server:", "Name: **" + guild.name + "** (``" + guild.id + "``) \n Members: **" + guild.memberCount + "** \n Owner: **" + guild.owner + "** (``" + guild.ownerID + "``)")
    .setTimestamp()
    client.channels.get("689513780870381568").send(BotAddedEmbed)
})

// HELP COMMAND

client.on('message', message => {
    var Success = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle( emoji("689538521161138177") + message.author.username + ", check your DMs!")
    var HelpEmbed = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle("Hey " + message.author.username + "! Here are some information that can help you:")
    .setDescription("**• If you want to invite the bot on your server, [click here!](https://discordapp.com/oauth2/authorize?client_id=689515456771391488&scope=bot&permissions=8)\n • To join our support server, [click here!](https://discord.gg/HyHffQY) \n • To see the list of all commands, say ``" + prefix + "cmds``.**")
    if(message.content === prefix + "help"){
        message.channel.send(Success)
        message.author.send(HelpEmbed)
    }
})

//////////////////////////////////// F U N   C O M MA N D S ////////////////////////////////////
////////////////////////////////////                        ////////////////////////////////////
//////////////////////////////////// F U N   C O M MA N D S ////////////////////////////////////

// KISS COMMAND

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "kiss") {
        var NoMention = new Discord.RichEmbed()
        .setColor("0xf306e6")
        .setTitle(":kiss: " + message.author.username + " kisses MyBot.")
        .setImage("https://media0.giphy.com/media/FmB6UTdCj3G12/source.gif")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(NoMention)
        var success = new Discord.RichEmbed()
        .setColor("0xf306e6")
        .setTitle(":kiss: " + message.author.username + " kisses " + member.displayName + ".")
        .setImage("https://media0.giphy.com/media/FmB6UTdCj3G12/source.gif")
        message.channel.send(success)
    }
})

// FIGHT COMMAND

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "fight") {
        var NoMention = new Discord.RichEmbed()
        .setColor("0xff0000")
        .setTitle(":punch: " + message.author.username + " VS MyBot!")
        .setImage("https://media1.giphy.com/media/eR7OEDQDyA7Cg/giphy.gif")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(NoMention)
        var success = new Discord.RichEmbed()
        .setColor("0xff0000")
        .setTitle(":punch: " + message.author.username + " VS " + member.displayName + "!")
        .setImage("https://media1.giphy.com/media/eR7OEDQDyA7Cg/giphy.gif")
        message.channel.send(success)
    }
})

// HUG COMMAND

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "hug") {
        var NoMention = new Discord.RichEmbed()
        .setColor("0xf306e6")
        .setTitle(":blush: " + message.author.username + " hugs MyBot.")
        .setImage("https://i.pinimg.com/originals/ab/58/a8/ab58a8f3ad91fd62911f84bf3d54127c.gif")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(NoMention)
        var success = new Discord.RichEmbed()
        .setColor("0xf306e6")
        .setTitle(":blush: " + message.author.username + " hugs " + member.displayName + ".")
        .setImage("https://i.pinimg.com/originals/ab/58/a8/ab58a8f3ad91fd62911f84bf3d54127c.gif")
        message.channel.send(success)
    }
})

// SLAP COMMAND

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "slap") {
        var NoMention = new Discord.RichEmbed()
        .setColor("0xff0000")
        .setTitle(":eyes: " + message.author.username + " slaps MyBot.")
        .setImage("https://media3.giphy.com/media/Gf3AUz3eBNbTW/source.gif")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(NoMention)
        var success = new Discord.RichEmbed()
        .setColor("0xff0000")
        .setTitle(":eyes: " + message.author.username + " slaps " + member.displayName + ".")
        .setImage("https://media3.giphy.com/media/Gf3AUz3eBNbTW/source.gif")
        message.channel.send(success)
    }
})

// SLAP COMMAND

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "think") {
        var NoMention = new Discord.RichEmbed()
        .setColor("0xf306e6")
        .setTitle(":thinking: " + message.author.username + " is thinking about... MyBot!")
        .setImage("https://media2.giphy.com/media/kQ3FSVoJrkYWk/source.gif")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(NoMention)
        var success = new Discord.RichEmbed()
        .setColor("0xf306e6")
        .setTitle(":thinking: " + message.author.username + " is thinking about... " + member.displayName + "!")
        .setImage("https://media2.giphy.com/media/kQ3FSVoJrkYWk/source.gif")
        message.channel.send(success)
    }
})

//////////////////////////////////// M O D E R A T I O N   C O M MA N D S ////////////////////////////////////
////////////////////////////////////                                      ////////////////////////////////////
//////////////////////////////////// M O D E R A T I O N   C O M MA N D S ////////////////////////////////////

// BAN COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'ban') {
        var BanNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Ban Members``.")
        var NotBanMemberMentionned = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        var NoBanReasonEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a reason.")
        var CantBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "I can't ban this user.")
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(BanNotAllowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send(NotBanMemberMentionned)
        if (!reason) return message.channel.send(NoBanReasonEntered)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(CantBan)
        if (!member.bannable) return message.channel.send(CantBan)
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Someone has been banned with MyBot.")
        .setThumbnail(message.guild.iconURL)
        .addField("Information about the ban:", "Server: **" + member.guild.name + "** (``" + message.guild.id + "``) \n Members: **" + message.guild.memberCount + "** \n Owner: **<@" + message.guild.ownerID + ">** (``" + message.guild.ownerID + "``) \n Moderator: **" + message.author.username + "** (``" + message.author.id + "``) \n User banned: **" + member.displayName + "** (``" + member.id + "``) \n Reason: **" + reason + "**")
        .setTimestamp()
        client.channels.get("689514976750338067").send(SupportServerBan)
        member.ban({days: 7})
        message.delete()
        var BanSuccess = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + " has been banned from the server: ``" + reason + "``")
        .setTimestamp()
        message.channel.send(BanSuccess)
    }
})

// SOFTBAN COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'softban') {
        var SoftBanNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Ban Members``.")
        var NotSoftBanMemberMentionned = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        var NoSoftBanReasonEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a reason.")
        var CantSoftBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "I can't softban this user.")
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(SoftBanNotAllowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send(NotSoftBanMemberMentionned)
        if (!reason) return message.channel.send(NoSoftBanReasonEntered)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(CantSoftBan)
        if (!member.bannable) return message.channel.send(CantSoftBan)
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Someone has been softbanned with MyBot.")
        .setThumbnail(message.guild.iconURL)
        .addField("Information about the softban:", "Server: **" + member.guild.name + "** (``" + message.guild.id + "``) \n Members: **" + message.guild.memberCount + "** \n Owner: **<@" + message.guild.ownerID + ">** (``" + message.guild.ownerID + "``) \n Moderator: **" + message.author.username + "** (``" + message.author.id + "``) \n User banned: **" + member.displayName + "** (``" + member.id + "``) \n Reason: **" + reason + "**")
        .setTimestamp()
        client.channels.get("689514976750338067").send(SupportServerBan)
        member.ban({days: 7})
        message.guild.unban(member)
        message.delete()
        var SoftBanSuccess = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + " has been softbanned from the server: ``" + reason + "``")
        .setTimestamp()
        message.channel.send(SoftBanSuccess)
    }
})

// KICK COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
        var BanNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Kick Members``.")
        var NotBanMemberMentionned = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        var NoBanReasonEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a reason.")
        var CantKick = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "I can't kick this user.")
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(BanNotAllowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send(NotBanMemberMentionned)
        if (!reason) return message.channel.send(NoBanReasonEntered)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(CantBan)
        if (!member.kickable) return message.channel.send(CantKick)
        var SupportServerKick = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Someone has been kicked with MyBot.")
        .setThumbnail(message.guild.iconURL)
        .addField("Information about the kick:", "Server: **" + member.guild.name + "** (``" + message.guild.id + "``) \n Members: **" + message.guild.memberCount + "** \n Owner: **<@" + message.guild.ownerID + ">** (``" + message.guild.ownerID + "``) \n Moderator: **" + message.author.username + "** (``" + message.author.id + "``) \n User kicked: **" + member.displayName + "** (``" + member.id + "``) \n Reason: **" + reason + "**")
        .setTimestamp()
        client.channels.get("689514976750338067").send(SupportServerKick)
        member.ban({days: 7})
        message.delete()
        var KickSuccess = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + " has been kicked from the server: ``" + reason + "``")
        .setTimestamp()
        message.channel.send(KickSuccess)
    }
})

// PURGE COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "purge") {
        var PurgeNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Manage Messages``.")
        var NoNumberEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "Enter a number of messages to purge.")
        var IncorrectNumberEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "Enter a number of messages to purge.")
        var TooHigh = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "Enter a number of messages to purge (1 to 100).")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(PurgeNotAllowed)
        let count = parseInt(args[1])
        if (!count) return message.channel.send(NoNumberEntered)
        if (isNaN(count)) return message.channel.send(IncorrectNumberEntered)
        if (count < 1 || count > 100) return message.channel.send(TooHigh)
        message.channel.bulkDelete(count + 1, true)
    }
})

// SETNICK COMMAND

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "setnick") {
        var SetnickNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Manage Nicknames``.")
        var NoSetnickmemberEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        var NoNewNickEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a new nickname")
        var CantSetnick = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "I can't rename this user.")
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(SetnickNotAllowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send(NoSetnickmemberEntered)
        if(!reason) return message.channel.send(NoNewNickEntered)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(CantSetnick)
        if (!member.manageable) return message.channel.send(CantSetnick)
        member.setNickname(reason)
        var SetNickSuccess = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + "'s nickname has been set to: ``" + reason + "``")
        .setTimestamp()
        message.channel.send(SetNickSuccess)
    }
})

// MUTE COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "mute") {
        var MuteNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Manage Messages``.")
        var NotMuteMemberMentionned = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        var CantMute = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "I can't mute this user.")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(MuteNotAllowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(NotMuteMemberMentionned)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(CantMute)
        if (!member.manageable) return message.channel.send(CantMute)
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        var MuteSuccess = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + " has been muted.")
        .setTimestamp()
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(MuteSuccess)
            message.delete()
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                    })
                })
                member.addRole(muterole)
                message.channel.send(MuteSuccess)
                message.delete()
            })
        }
    }
})

// UNMUTE COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "unmute") {
        var MuteNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Manage Messages``.")
        var NotMuteMemberMentionned = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        var CantMute = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "I can't unmute this user.")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(MuteNotAllowed)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(NotMuteMemberMentionned)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(CantMute)
        if (!member.manageable) return message.channel.send(CantMute)
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        var MuteSuccess = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + " has been unmuted.")
        .setTimestamp()
        member.removeRole(muterole)
    }
})

// SUGGESTION COMMAND

// SUGGESTION COMMAND

client.on("message", message => {
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + 'suggest') {
        var NoSuggestionEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a suggestion.")
        let SuggestionTyped = args.slice(1).join(" ")
        if(!SuggestionTyped) return message.channel.send(NoSuggestionEntered)
        var SuggestionEmbed = new Discord.RichEmbed()
        .setTitle(":pushpin: A suggestion has been sent.")
        .setDescription(SuggestionTyped)
        .setThumbnail(message.guild.iconURL)
        .addField("Information about the suggestion:", "Server: **" + message.guild.name + "** (``" + message.guild.id + "``) \n Members: **" + message.guild.memberCount + "** \n Owner: **<@" + message.guild.ownerID + ">** (``" + message.guild.ownerID + "``) \n User: **" + message.author.username + "** (``" + message.author.id + "``)")
        .setTimestamp()
        client.channels.get("689897913148899337").send(SuggestionEmbed)
        var Success = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + message.author.username + ", your suggestion has been sent to our support server. Thank you!")
        .setTimestamp()
        message.channel.send(Success)
    }
})
