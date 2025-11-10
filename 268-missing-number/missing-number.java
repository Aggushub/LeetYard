class Solution {
    public int missingNumber(int[] nums) {
        int sum_nums = 0;
        int sum_og = 0;
        for (int i = 0;i <nums.length; i++){
            sum_nums += nums[i];
        }
        for (int j = 0; j < nums.length+1;j++){
            sum_og += j;
        }
        return sum_og - sum_nums;
    }
}