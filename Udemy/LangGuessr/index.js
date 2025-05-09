const franc = requeire("franc");
const langs = require("langs");
const colors = require("colors");

const input = ProcessingInstruction.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
    console.log("Sorry, I couldn't find a language match.".red);
} else {
    const language = langs.where("3", langCode);
    console.log(`I think this text is in ${language.name}`.green);
}