const commando = require("discord.js-commando");
const Discord = require("discord.js");
const wa = require("../../wolframkey").wakey;
var wolfram = require('wolfram').createClient(wa);

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
        let replyWith = function (content) { message.reply(content) };
        queryResult(args, replyWith);
    };
}
function queryResult(query, callback) {
    wolfram.query(query, function (err, result) {
        if (err) { throw err; };
        callback(result[1].subpods[0].value);
    });
};

module.exports = tungstenCommand

//export the below command instead of the above one to test
//queryResult