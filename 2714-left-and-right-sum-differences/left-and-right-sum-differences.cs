public class Solution {
    public int[] LeftRightDifference(int[] nums) {
        int lsum = 0, rsum = 0, output = 0;
        for(int i = 0; i < nums.Length;i++){
            rsum += nums[i];
        }
        for(int i = 0; i < nums.Length;i++){
            rsum -= nums[i];
            output = Math.Abs(lsum - rsum);
            lsum += nums[i];
            nums[i] = output;
        }
        return nums;

    }
}