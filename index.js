require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

// Bot ready for kicking it!
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// Te bajas dos tonitos
client.on('message', (message) => {
  if (message && message.content.includes("!tonitos") > 0) {
    const number = message.content.split(' ')[0];
    const member = message.mentions.members.first()
    if (!member) {
      return message.reply(`A quién increpo, mongolín?`)
    }
    return message.channel.send(`${member}, te bajas ${number} tonitos crack`);
  }
})

// Send a remote file
client.on('message', (message) => {
  if(message && message.content.startsWith("!pmilos")) {
    message.channel.send({
      files: ['https://cdn.discordapp.com/attachments/440900194414886925/754375865034604684/pm.gif']
    })
      .then(console.log)
      .catch(console.error);
  }
})

client.login(process.env.BOT_TOKEN);