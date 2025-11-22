public class Solution {
    public int MinimumOperations(int[] nums) {
        int count = 0;
        foreach (int each in nums){
            int rem = each % 3;
            if (rem == 0)
            continue;
            else
            count++;
        }
        return count;
    }
}