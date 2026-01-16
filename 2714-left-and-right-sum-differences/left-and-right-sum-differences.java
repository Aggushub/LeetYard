class Solution {
    public int[] leftRightDifference(int[] nums) {
        int lsum = 0, rsum = 0;
        for(int i = 0; i < nums.length; i++){
            rsum += nums[i];
        }
        int output = 0;
        for(int i = 0; i < nums.length; i++){
            rsum -= nums[i];
            output = Math.abs(lsum - rsum);
            lsum += nums[i];
            nums[i] = output;

        }
        return nums;
    }
}