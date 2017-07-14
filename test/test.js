const tungsten = require("../Commands/Tungsten/tungsten.js");
const wa = require("../wolframkey").wakey;
let wolfram = require('wolfram').createClient(wa);
let assert = require("assert");

describe("tungsten", function () {
    it("Should use Wolfram Alpha to calculate", function () {
        var result = tungsten.queryResult("100-50", (a) => assert.equal(a, "50"));
    });
});