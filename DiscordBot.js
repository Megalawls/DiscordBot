const commando = require("discord.js-commando");
const client = new commando.Client();
const key = require('./SJWbotToken').key;
 
client.registry.registerGroup("privilegechecker")
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/Commands");

// client.on('ready', () => {
//   console.log('SJW Bot REEEEEnitialised');
// });
 
// client.on('message', message => {
//   if (message.content.toLowerCase().includes('translate from japanese:')) {
//     message.reply('In English, that word is \"Menacing\"');
//   }
// });
 
client.login(key);