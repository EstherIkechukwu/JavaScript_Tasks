import string

name = "Ayo"
print(name)
print(id(name))

name += " mide"
print(id(name))
print (name)

help(name.casefold)

print(name.strip())

names = ["Esther", "Bibi", "Gloria", "Mercy"]
print(", ".join(names))

letters = string.ascii_lowercase
print(letters.split(","))