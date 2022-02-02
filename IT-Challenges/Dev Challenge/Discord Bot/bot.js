const Discord = require("discord.js.old")
const fs = require('fs')
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)  
})
let total = []
let absent = []
let attendees = []
client.on('message', (message) => {
  if (message.content.startsWith('!meeting')) {
    let channelID = 'ID OF THE CHANNEL WHERE ALL THE MEMBERS';
    message.guild.channels.get(channelID).members.forEach((member) => {
      total.push(member.user.username);
    });
    console.log("Channel members are: " + total)    
  }
});
client.on('message', (message) => {
  if (message.content.startsWith('!meeting')) {
    let channelID = 'VOICE CHANNEL ID';
    message.guild.channels.get(channelID).members.forEach((member) => {
      attendees.push(member.user.username);
    });
    console.log("attendees members are: " + attendees)
    for (let i = 0; i < total.length; i++) {
      if (!attendees.includes(total[i])) {
        absent.push(total[i])
      }
    }
    message.guild.channels.get('ID OF THE CHANNEL WHERE ALL THE MEMBERS')
      .members.forEach((member) => {
        if (absent.includes(member.user.username)) {
          member.send(member.user.username + ' You were absent for today\'s meeting !');
        }
      });
    console.log("absent members are: " + absent)            
    fs.writeFileSync("absentM.txt", absent)
    
  }
});
client.login(process.env.TOKEN)