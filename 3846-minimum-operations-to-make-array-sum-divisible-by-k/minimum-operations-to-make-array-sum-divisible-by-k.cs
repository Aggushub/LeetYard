public class Solution {
    public int MinOperations(int[] nums, int k) {
        int Sum = 0;
        foreach (int num in nums){
            Sum += num;
        }
        return Sum % k;
    }
}