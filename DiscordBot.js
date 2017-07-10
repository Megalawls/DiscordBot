const Discord = require('discord.js');
const client = new Discord.Client();
const key = require('./SJWbot').key;
 
client.on('ready', () => {
  console.log('');
});
 
client.on('message', message => {
  if (message.content.toLowerCase().includes('translate from japanese:')) {
    message.reply('In English, that word is \"Menacing\"');
  }
});
 
client.login(key);