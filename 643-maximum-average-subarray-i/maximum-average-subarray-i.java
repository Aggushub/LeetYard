class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int currSum = 0,i = 0;
        for (i = 0;i < k;i++)
        currSum += nums[i];

        int maxSum = currSum;

        for(i=k;i<nums.length;i++){
            currSum = currSum + nums[i] - nums[i-k];
            maxSum = Math.max(currSum, maxSum);
        }
        return (double)maxSum/k;
    }
}