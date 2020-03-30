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
    client.user.setActivity("Need help? Use -help!", {type: "PLAYING"})
})

// CMDS COMMAND

client.on('message', message => {
    var CommandsEmbed = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .addField("Basic commands", "**-help** Displays a few information that can help you.\n **-cmds** Displays a list of all commands.\n **-suggest** Send a suggestion to our developers.\n **-bug** Send a bug report to our developers.\n **-support** Sends a link to join our support server.\n **-invite** Sends a link to add MyBot on your server.\n **-roles** Displays the roles of a user.\n **-whois** Displays information about a user.")
    .addField("Fun Commands", "**-kiss** Kissed a user.\n **-slap** Slaps someone.\n **-fight** Start a fight with a user.\n **-hug** Hugs someone.\n **-think** Think about someone.\n **-8ball** Ask a question, get an answer.\n **-avatar** Displays your Discord avatar.")
    .addField("Moderation commands", "**-ban** Ban a user.\n **-kick** Kick a user.\n **-purge** Delete a number of messages.\n **-setnick** Set the nickname of a user.\n **-softban** Softban a user (ban and immediate unban to delete user messages).\n **-mute** Mute a user.\n **-unmute** Unmute a user.")
    .addField("Managment Command", "**-setservername** Change the server name.\n **-setservericon** Change the server icon.\n **-setname** Change the name of a channel. \n **-settopic** Change the topic of a channel.")
    .setTimestamp()
    .setFooter("More coming soon.")
    if(message.content === "-cmds") {
        message.channel.send(CommandsEmbed)
    }
})

// BOT ADDED & REMOVED

client.on("guildCreate", guild =>{
    var BotAddedEmbed = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle("MyBot has been added on a server.")
    .setDescription(`I am now on ${client.guilds.size} servers !`)
    .setThumbnail(guild.iconURL)
    .addField("Information about the server:", "Name: **" + guild.name + "** (``" + guild.id + "``) \n Members: **" + guild.memberCount + "** \n Owner: **" + guild.owner.displayName + "** (``" + guild.ownerID + "``)")
    .setTimestamp()
    client.channels.get("689513780870381568").send(BotAddedEmbed)
})

client.on("guildDelete", guild =>{
    var BotAddedEmbed = new Discord.RichEmbed()
    .setColor("0xf35353")
    .setTitle("MyBot has been removed from a server.")
    .setDescription(`I am now on ${client.guilds.size} servers !`)
    .setThumbnail(guild.iconURL)
    .addField("Information about the server:", "Name: **" + guild.name + "** (``" + guild.id + "``) \n Members: **" + guild.memberCount + "** \n Owner: **" + guild.owner.displayName + "** (``" + guild.ownerID + "``)")
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

client.on('message', message => {
    var AvatarEmbed = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle("Here is your avatar:")
    .setImage(message.author.displayAvatarURL)
    if(message.content === prefix + "avatar"){
        message.channel.send(AvatarEmbed)
    }
})

client.on('message', message => {
    var Success = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle( emoji("689538521161138177") + "Hey " + message.author.username + "! Want to add MyBot on your server? You can do it by clicking here!")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=689515456771391488&scope=bot&permissions=8")
    if(message.content === prefix + "invite"){
        message.channel.send(Success)
    }
})

client.on('message', message => {
    var Success = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle( emoji("689538521161138177") + "Hey " + message.author.username + "! Want to join our support server? You can do it by clicking here!")
    .setURL("discord.gg/qsV4x8r")
    if(message.content === prefix + "support"){
        message.channel.send(Success)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "roles") {
        var NoMention = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        .setTimestamp()
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(NoMention)
        var Success = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Here are all the roles that " + member.displayName + " has:")
        .setDescription(member.roles.map(r => `${r}`).join(' \n '), true)
        .setTimestamp()
        message.channel.send(Success)
    }
})

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "whois") {
        var NoMention = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        .setTimestamp()
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(NoMention)
        var Success = new Discord.RichEmbed()
        .setColor("0xf35353")
        .addField("**Username:**", member.displayName)
        .addField("**ID:**", member.id)
        .addField("**Joined at:**", member.joinedAt, true)
        .addField("**Status:**", member.presence.status, true)
        .addField("**Roles:**", member.roles.map(r => `${r}`).join(' | '), true)
        .setTimestamp()
        message.channel.send(Success)
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
        .setTitle("Banishment")
        .setThumbnail(message.guild.iconURL)
        .addField("User banned:", member + " (``" + member.id + "``)")
        .addField("Banned by:", "<@" + message.author.id + "> (``" + message.author.id + "``)")
        .addField("From the server:", message.guild.name + " (``" + message.guild.id + "``)")
        .addField("Reason:", reason)
        .setThumbnail(message.guild.iconURL)
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
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("(Soft) Banishment")
        .setThumbnail(message.guild.iconURL)
        .addField("User banned:", member + " (``" + member.id + "``)")
        .addField("Banned by:", "<@" + message.author.id + "> (``" + message.author.id + "``)")
        .addField("From the server:", message.guild.name + " (``" + message.guild.id + "``)")
        .addField("Reason:", reason)
        .setThumbnail(message.guild.iconURL)
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
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Expulsion")
        .setThumbnail(message.guild.iconURL)
        .addField("User banned:", member + " (``" + member.id + "``)")
        .addField("Banned by:", "<@" + message.author.id + "> (``" + message.author.id + "``)")
        .addField("From the server:", message.guild.name + " (``" + message.guild.id + "``)")
        .addField("Reason:", reason)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        client.channels.get("689514976750338067").send(SupportServerBan)
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
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Purge")
        .setThumbnail(message.guild.iconURL)
        .addField("Server:", message.guild.name + " (``" + message.guild.id + "``)")
        .addField("Messages:", count)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        client.channels.get("689514976750338067").send(SupportServerBan)
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
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Rename")
        .setThumbnail(message.guild.iconURL)
        .addField("User renammed:", member + " (``" + member.id + "``)")
        .addField("Renammed by:", "<@" + message.author.id + "> (``" + message.author.id + "``)")
        .addField("From the server:", message.guild.name + " (``" + message.guild.id + "``)")
        .addField("New nickname:", reason)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        member.setNickname(reason)
        client.channels.get("689514976750338067").send(SupportServerBan)
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
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Mute")
        .setThumbnail(message.guild.iconURL)
        .addField("User muted:", member + " (``" + member.id + "``)")
        .addField("Muted by:", "<@" + message.author.id + "> (``" + message.author.id + "``)")
        .addField("From the server:", message.guild.name + " (``" + message.guild.id + "``)")
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(MuteSuccess)
            message.delete()
            client.channels.get("689514976750338067").send(SupportServerBan)
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
                client.channels.get("689514976750338067").send(SupportServerBan)
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
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Unmute")
        .setThumbnail(message.guild.iconURL)
        .addField("User unmuted:", member + " (``" + member.id + "``)")
        .addField("Unmuted by:", "<@" + message.author.id + "> (``" + message.author.id + "``)")
        .addField("From the server:", message.guild.name + " (``" + message.guild.id + "``)")
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        client.channels.get("689514976750338067").send(SupportServerBan)
        member.removeRole(muterole)
    }
})

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
        .setColor("0x38ee0e")
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
        message.delete()
    }
})

// BUG COMMAND

client.on("message", message => {
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + 'bug') {
        var NoSuggestionEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a bug report.")
        let SuggestionTyped = args.slice(1).join(" ")
        if(!SuggestionTyped) return message.channel.send(NoSuggestionEntered)
        var SuggestionEmbed = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle(":gear: A bug report has been sent.")
        .setDescription(SuggestionTyped)
        .setThumbnail(message.guild.iconURL)
        .addField("Information about the bug report:", "Server: **" + message.guild.name + "** (``" + message.guild.id + "``) \n Members: **" + message.guild.memberCount + "** \n Owner: **<@" + message.guild.ownerID + ">** (``" + message.guild.ownerID + "``) \n User: **" + message.author.username + "** (``" + message.author.id + "``)")
        .setTimestamp()
        client.channels.get("689897913148899337").send(SuggestionEmbed)
        var Success = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + message.author.username + ", your bug report has been sent to our support server. Thank you!")
        .setTimestamp()
        message.channel.send(Success)
        message.delete()
    }
})

// SETNAME COMMAND

client.on("message", message => {
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + 'setname') {
        var NotALlowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Manage Channels``.")
        var NoSuggestionEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a new name.")
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(NotALlowed)
        let SuggestionTyped = args.slice(1).join(" ")
        if(!SuggestionTyped) return message.channel.send(NoSuggestionEntered)
        var Success = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + "Name set to: ``" + SuggestionTyped + "``")
        .setTimestamp()
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Channel Rename")
        .setThumbnail(message.guild.iconURL)
        .addField("Server:", message.guild.name + " (``" + message.guild.id + "``)")
        .addField("Channel renammed:", message.channel.name + " (``" + message.channel.id + "``)")
        .addField("Renammed by:", "<@" + message.author.id + "> (``" + message.author.id + "``)")
        .addField("New name:", SuggestionTyped)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        client.channels.get("689897913148899337").send(SupportServerBan)
        message.channel.send(Success)
        message.channel.setName(SuggestionTyped)
    }
})

// SETTOPIC COMMAND

client.on("message", message => {
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + 'settopic') {
        var NoSuggestionEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a new topic.")
        var NotALlowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Manage Channels``.")
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(NotALlowed)
        let SuggestionTyped = args.slice(1).join(" ")
        if(!SuggestionTyped) return message.channel.send(NoSuggestionEntered)
        var Success = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + "Name set to: ``" + SuggestionTyped + "``")
        .setTimestamp()
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Topic Change")
        .setThumbnail(message.guild.iconURL)
        .addField("Server:", message.guild.name + " (``" + message.guild.id + "``)")
        .addField("Channel:", message.channel.name + " (``" + message.channel.id + "``)")
        .addField("Changed by:", "<@" + message.author.id + "> (``" + message.author.id + "``)")
        .addField("New topic:", SuggestionTyped)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        client.channels.get("689897913148899337").send(SupportServerBan)
        message.channel.send(Success)
        message.channel.setTopic(SuggestionTyped)
    }
})

// SETSERVERNAME COMMAND

client.on("message", message => {
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + 'setservername') {
        var NoSuggestionEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a new name.")
        var NotALlowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Manage Guild``.")
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(NotALlowed)
        let SuggestionTyped = args.slice(1).join(" ")
        if(!SuggestionTyped) return message.channel.send(NoSuggestionEntered)
        var Success = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + "Server name set to: ``" + SuggestionTyped + "``")
        .setTimestamp()
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Server Rename")
        .setThumbnail(message.guild.iconURL)
        .addField("Server:", message.guild.name + " (``" + message.guild.id + "``)")
        .addField("Renammed by:", "<@" + message.author.id + "> (``" + message.author.id + "``)")
        .addField("New name:", SuggestionTyped)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        client.channels.get("689897913148899337").send(SupportServerBan)
        message.channel.send(Success)
        message.guild.setName(SuggestionTyped)
    }
})

// SETSERVERNAME COMMAND

client.on("message", message => {
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + 'setservericon') {
        var NoSuggestionEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a new icon URL.")
        var NotALlowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Manage Guild``.")
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(NotALlowed)
        let SuggestionTyped = args.slice(1).join(" ")
        if(!SuggestionTyped) return message.channel.send(NoSuggestionEntered)
        var Success = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + "Server icon set to: ``" + SuggestionTyped + "``")
        .setTimestamp()
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Server Icon Change")
        .setThumbnail(message.guild.iconURL)
        .addField("Server:", message.guild.name + " (``" + message.guild.id + "``)")
        .addField("Changed by:", "<@" + message.author.id + "> (``" + message.author.id + "``)")
        .addField("URL:", "(``" + SuggestionTyped + "``)")
        .setThumbnail(message.guild.iconURL)
        .setImage(SuggestionTyped)
        .setTimestamp()
        client.channels.get("689897913148899337").send(SupportServerBan)
        message.channel.send(Success)
        message.guild.setIcon(SuggestionTyped)
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "8ball") {
        var NoSuggestionEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must ask a question.")
        if (!args[1]) return message.channel.send(NoSuggestionEntered)
        let answers = ["Yes.", "No.", "Maybe.", "Never.", "Of course.","Always."]
        let question = args.slice(1).join(" ")
        var Success = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + answers[Math.floor(Math.random() * answers.length)])
        .setTimestamp()
        message.channel.send(Success)
    }
})

client.on('message', message =>{
    if(message.content === "!check"){
        let user = message.author
        if(client.guilds.get("689503638020030673").user.roles.some(r=>["Moderator"].includes(r.name))) return message.channel.send("You're not a moderator!")
        message.channel.send("You are a moderator!")
    }
})
