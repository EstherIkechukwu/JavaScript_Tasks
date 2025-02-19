from enum import Enum

class GeoPoliticalZones(Enum):
    NORTH_CENTRAL = ("Benue", "FCT", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau")
    NORTH_EAST = ("Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe")
    NORTH_WEST = ("Kaduna", "Katsina", "Kano", "Kebbi", "Sokoto", "Jigawa", "Zamfara")
    SOUTH_EAST = ("Abia", "Anambra", "Ebonyi", "Enugu", "Imo")
    SOUTH_SOUTH = ("Akwa Ibom", "Bayelsa", "Cross River", "Delta", "Edo", "Rivers")
    SOUTH_WEST = ("Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo")

def find_zone(state):
    for zone in GeoPoliticalZones:
        if state in zone.value:
            return zone
    return None

state = input("Enter the name of your state: ")
zone = find_zone(state)
if zone:
    print(f"Your state, {state}, is in the {zone.name.replace('_', ' ')} geopolitical zone.")
else:
    print("State not found in any geopolitical zone.")
