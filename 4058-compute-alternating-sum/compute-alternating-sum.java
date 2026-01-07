class Solution {
    public int alternatingSum(int[] nums) {
        int output = 0;
        int curr = 1;
        for (int num: nums){
            output += (curr * num);
            curr *= -1;
        }
        return output;
    }
}