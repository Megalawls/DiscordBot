const commando = require("discord.js-commando");
var wolfram = require('wolfram').createClient("E7RWPW-JV28GY59QR");

class tungstenCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "tungsten",
            group: "tungsten",
            memberName: "tungsten",
            description: "Queries Wolfram-Alpha, and returns the results in a formattted discord message"
        });
    }

    async run(message, args) {
        wolfram.query(args.toString(), function (err, result) {
            if (err){ throw err;}
            message.reply("Result:" +  result[1].subpods[0].value);
        });

    };
}


module.exports = tungstenCommand

