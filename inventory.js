const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

for(let fruit in inventory){
    console.log(`${fruit}`)
}

let total = 0
for(let fruit in inventory){
    total += inventory[fruit]
}

console.log(`the Total number of fruits is ${total}`)