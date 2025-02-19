

const GeoPoliticalZones = {
    NORTHCENTRAL : ["Benue", "FCT", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau"],
    NORTHEAST : ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
    NORTHWEsT: ["Kaduna", "Katsina", "Kano", "Kebbi", "Sokoto", "Jigawa", "Zamfara"],
    SOUTHEAST: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
    SOUTHSOUTH: ["Akwa Ibom", "Bayelsa", "Cross-River", "Delta" , "Edo", "Rivers"],
    SOUTHWEST: ["Ekiti", "Lagos", "Osun", "Ondo", "Ogun", "Oyo"]
};

function getGeoPoliticalZone(state) {
    for (const zone in GeoPoliticalZones) {
        if (GeoPoliticalZones[zone].includes(state)) {
            return zone;
        }
    }
    return "Invalid State";
}

var prompt = require('prompt-sync')();
const state = prompt("Enter the name of your state: ");
const zone = getGeoPoliticalZone(state);
if (zone === "Invalid State") {
    console.log("Invalid State");
} else {
    console.log(`You are in the ${zone} geo-political zone`);
}

module.exports = getGeoPoliticalZone;