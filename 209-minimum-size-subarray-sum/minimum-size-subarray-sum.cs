public class Solution {
    public int MinSubArrayLen(int target, int[] nums) {
        int left  = 0;
        int currSum = 0;
        int length = int.MaxValue;

        for(int right = 0 ; right < nums.Length;right++){
            currSum += nums[right];
            while(currSum >= target){
                int currLength = right - left + 1;
                length = Math.Min(length, currLength);
                currSum -= nums[left];
                left++;
            }
        }
        return length != int.MaxValue? length:0;
    }
}