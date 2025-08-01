class Solution {
    public int maximumDifference(int[] nums) {
        int min = nums[0];
        int maxdiff = -1;
        for (int i = 0;i<nums.length;i++){
            if (nums[i]> min){
                maxdiff = Math.max(maxdiff, nums[i]-min);
            }
            else
            min = nums[i];
        }
        return maxdiff;
    }
}