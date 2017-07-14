const commando = require("discord.js-commando");
const Discord = require("discord.js");
const wa = require("../../wolframkey").wakey;
var wolfram = require('wolfram').createClient(wa);
const download = require("download");
const fs = require("fs");
class tungresCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "tungres",
            group: "tungsten",
            memberName: "tungres",
            description: "Queries Wolfram-Alpha, and returns a link with the raw image"
        });
    }

    async run(message, args) {
        let url = args.toString();
        let urlFinal = queryBuilder(url);
        download(urlFinal).then(data => {
            fs.writeFileSync('foo.gif', data);
            message.channel.send("Result:", {
                files: [
                    "foo.gif"
                ]
            });
        });
    };
}

function queryBuilder(string) {
    let nonplus = string.replace("+", "plus");
    let urlify = nonplus.replace(/ /gi, "+");
    let wolframURL = ("http://api.wolframalpha.com/v1/simple?appid=E7RWPW-JV28GY59QR&i=" + urlify + "&background=545762&foreground=white");
    return wolframURL;
}


module.exports = tungresCommand