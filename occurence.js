numbers = [2,2,1,3,5,5]

const object = {}

for( let num of numbers){
	if(!object[numbers[num]]) object[numbers[num]] = 0;
		++object[numbers[num]];
}
console.log(object)
