const commando = require("discord.js-commando");
const Discord = require("discord.js");
const client = new commando.Client();
const key = require('./RussBotToken').key;
const wa = require("./wolframkey").wakey;
var wolfram = require('wolfram').createClient(wa);
const download = require("download");
const fs = require("fs");

client.registry.registerGroup("tungsten");
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/Commands");

client.on('ready', () => {
  console.log('Tungsten Initialised. Type \"!help\" for usage information');
});



client.login(key);

//(earth's circumference in inches) divided by (average penis length in inches)

