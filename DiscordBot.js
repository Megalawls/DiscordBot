const Discord = require('discord.js');
const client = new Discord.Client();
const key = require('./SJWbotToken').key;
 
client.on('ready', () => {
  console.log('SJW Bot REEEEEnitialised');
});
 
client.on('message', message => {
  if (message.content.toLowerCase().includes('translate from japanese:')) {
    message.reply('In English, that word is \"Menacing\"');
  }
});
 
client.login(key);