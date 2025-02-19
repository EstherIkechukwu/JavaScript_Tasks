const {getGeoPoliticalZone} = require('./geoPoliticalZones');

beforeEach(() => GeoPoliticalZones = {
    NORTHCENTRAL : ["Benue", "FCT", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau"],
    NORTHEAST : ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
    NORTHWEST: ["Kaduna", "Katsina", "Kano", "Kebbi", "Sokoto", "Jigawa", "Zamfara"],
    SOUTHEAST: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
    SOUTHSOUTH: ["Akwa Ibom", "Bayelsa", "Cross-River", "Delta" , "Edo", "Rivers"],
    SOUTHWEST: ["Ekiti", "Lagos", "Osun", "Ondo", "Ogun", "Oyo"]
});

test('getGeoPoliticalZone returns correct value', () => {
    expect(getGeoPoliticalZone("Benue")).toBe("NORTHCENTRAL");
    expect(getGeoPoliticalZone("Adamawa")).toBe("NORTHEAST");
    expect(getGeoPoliticalZone("Kaduna")).toBe("NORTHWEST");
    expect(getGeoPoliticalZone("Abia")).toBe("SOUTHEAST");
    expect(getGeoPoliticalZone("Akwa Ibom")).toBe("SOUTHSOUTH");
    expect(getGeoPoliticalZone("Ekiti")).toBe("SOUTHWEST");
    expect(getGeoPoliticalZone("Kano")).toBe("NORTHWEST");
    expect(getGeoPoliticalZone("Rivers")).toBe("SOUTHSOUTH");
    expect(getGeoPoliticalZone("Oyo")).toBe("SOUTHWEST");
    expect(getGeoPoliticalZone("Invalid State")).toBe("Invalid State");
    expect(getGeoPoliticalZone("")).toBe("Invalid State");
    expect(getGeoPoliticalZone(" ")).toBe("Invalid State");
});