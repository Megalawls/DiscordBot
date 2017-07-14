const assert = require("chai").assert;
const Discord = require("discord.js");
const commando = require("discord.js-commando");
const key = require('./RussBotToken').key;
const client = new commando.Client();
var wolfram = require('wolfram').createClient("E7RWPW-JV28GY59QR");

client.registry.registerGroup("tungsten")
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/Commands");

client.on('ready', () => {
    console.log('Tungsten Initialised. Type \"!help\" for usage information');
    const ready = true;
});

assert(ready === true, "client is ready");

wolfram.query("100 plus 150", function (err, result) {
    message.reply("Result:" + result[1].subpods[0].value);
});