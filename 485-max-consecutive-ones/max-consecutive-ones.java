class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = 0;
        int cons = 0;
        for(int i = 0;i<nums.length;i++){
            cons = nums[i] == 1 ? cons+1:0;
            max = Math.max(max,cons);
        }
        return max;
        
    }
}