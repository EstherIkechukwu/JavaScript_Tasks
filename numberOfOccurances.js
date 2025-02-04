let numbers = [2, 2, 4, 3, 5, 5]

const counts = {}

for( let num of numbers){
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts); 