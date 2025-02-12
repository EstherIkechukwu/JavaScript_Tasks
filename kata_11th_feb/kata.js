function addNumbers(numbers){
    let num = 1;
    for(let index = numbers.length -1; index >0; index--){
        numbers[index - 1] = numbers[index -1] + 1;
        num = Math.floor(num / 10);
        num = num % 10
    }
}