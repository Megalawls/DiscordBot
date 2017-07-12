const commando = require("discord.js-commando");

class privilegeCheckerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "privilegechecker",
            group: "privilegechecker",
            memberName: "privilegechecker",
            description: "Checks your Privelege; format race,gender,sexuality,species,disabled, where disabled is either true or false"
        });
    }

    async run(message, args) {
        if (args.toString().includes(",,") || args.toString().includes(",") == false) {
            message.reply("Please provide all arguments for the Privilege Checker, use !help for any information on SJWbot")
        } else {
            var responseArray = args.toString().toLowerCase().split(",");
            if(validateResponses(responseArray) == true){
                message.reply(privilegeResponse(calculatePrivilege(responseArray)));
            }
        }
    }
}

function validateResponses(responses) {
    if (responses.length < 5) {
        message.reply("I can't calculate your privelege without all of your information, please enter \"!help\" if you are struggling");
    } else {
        return true;
    }
}

function calculatePrivilege(responses) {
    var privilege = 0;
    privilege = privilege + privilegeRace(responses[0]);
    privilege = privilege + privilegeGender(responses[1]);
    privilege = privilege + privilegeSexuality(responses[2]);
    privilege = privilege + privilegeSpecies(responses[3]);
    if(responses[4] == "false"){
        privilege += 1
    };
    return privilege

}

function privilegeRace(race) {
    var privilegeModifier = 0;
    switch (race) {
        case "white":
            privilegeModifier += 4;
            break;
        case "asian":
            privilegeModifier += 3;
            break;
        case "black":
            privilegeModifier += 1;
            break;
        case "indian":
            privilegeModifier += 2;
            break;
        default:
            privilegeModifier += 1;
            break;
    };
    return privilegeModifier
}

function privilegeGender(gender) {
    var genderModifier = 0;
    switch (gender) {
        case "male":
            genderModifier += 3;
            break;
        case "female":
            genderModifier += 2;
            break;
        case "transgender": case "trans":
            genderModifier += 1;
            break;
        case "apache attack helicopter": case "apache": case "helicopter":
            genderModifier += 100;
            break;
        default:
            genderModifier += 0;
            break;
    };
    return genderModifier
}
function privilegeSexuality(sex) {
    var sexModifier = 0;
    switch (sex) {
        case "straight": case "heterosexual":
            sexModifier += 4;
            break;
        case "gay": case "homosexual":
            sexModifier += 2;
            break;
        case "bi": case "bisexual":
            sexModifier += 3;
            break;
        default:
            sexModifier += 1;
            break;
    };
    return sexModifier
}

function privilegeSpecies(species) {
    var speciesModifier = 0;
    switch (species) {
        case "human":
            speciesModifier += 3;
            break;
        case "apache attack helicopter": case "apache": case "helicopter":
            speciesModifier += 100;
            break;
        default:
            speciesModifier += 0;
            break;
    };
    return speciesModifier
}

function privilegeResponse(privilegeVal){
    if(privilegeVal >= 90){
        return "Aerial Superiority, take to the skies and sread your dominion"
    }else if(privilegeVal >= 14){
        return "You are the pinnacle of privilege, cis-het scum"
    }else if(privilegeVal >= 12){
        return "You are really privileged tbh"
    }else if(privilegeVal >= 9){
        return "You are fairly privileged"
    }else if(privilegeVal >= 6){
        return "You aren't particularly privileged at all"
    }else if(privilegeVal >= 3){
        return "You are really not privileged"
    }else{
        return "You poor fuck"
    }
}


module.exports = privilegeCheckerCommand