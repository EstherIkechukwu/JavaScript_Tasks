public class MorningTask{

    public int[] findMissingNumbers(int [] numbers){
        Arrays.sort(numbers);
        int [] missingNumbers = new int[numbers.length];
        int j = 0;
        for(int i = 0; i < numbers.length - 1; i++){
            if(numbers[i] + 1 != numbers[i + 1]){
                missingNumbers[j] = numbers[i] + 1;
                j++;
            }
        }
        return missingNumbers;
    }
}