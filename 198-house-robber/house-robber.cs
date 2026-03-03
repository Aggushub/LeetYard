public class Solution {
    public int Rob(int[] nums) {
        int n = nums.Length;
        if (n == 1)
        return nums[0];
        List<int> dp = new List<int>(n);
        dp.Add(nums[0]);
        dp.Add(Math.Max(nums[1],nums[0]));
        for (int i = 2; i < n; i++){
            dp.Add(Math.Max(dp[i-1], dp[i-2]+nums[i]));
        }
        return dp[^1];
    }
}