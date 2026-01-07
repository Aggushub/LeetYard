public class Solution {
    public int AlternatingSum(int[] nums) {
        int output = 0;
        int curr = 1;
        foreach (int num in nums ){
            output += (num * curr);
            curr *= -1;        
        }
        return output;
    }
    
}