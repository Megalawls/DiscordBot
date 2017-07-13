const commando = require("discord.js-commando");
const Discord = require("discord.js");
var wolfram = require('wolfram').createClient("E7RWPW-JV28GY59QR");
const download = require("download");
const fs = require("fs");
class tungresCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "tungres",
            group: "tungsten",
            memberName: "tungres",
            description: "Queries Wolfram-Alpha, and returns a link with an image displaying all the details of your query, along with any other interesting information"
        });
    }

    async run(message, args) {
        download("http://api.wolframalpha.com/v1/simple?appid=E7RWPW-JV28GY59QR&i=one+foot+in+metres&background=545762&foreground=white").then(data => {
            fs.writeFileSync('foo.gif', data); 
            message.channel.sendFile(("foo.gif"));
        });
         
    };
}

function queryBuilder(string) {
    let urlify = string.replace(/ /gi, "+");
    let wolframURL = ("http://api.wolframalpha.com/v1/simple?appid=E7RWPW-JV28GY59QR&i=" + urlify + "&background=545762&foreground=white");
    return wolframURL;
}


module.exports = tungresCommand