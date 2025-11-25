public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        int count = 0;
        int Maxcount = 0;
        foreach(int num in nums){
            if (num == 1){
                count++;
                Maxcount = Math.Max(count,Maxcount);
            }
            else
            count = 0;
        }
        return Maxcount;
    }
}