public class Solution {
    public IList<bool> PrefixesDivBy5(int[] nums) {
        int curr = 0;
        List<bool> output = new List<bool>();
        foreach(int bit in nums){
            curr = (curr * 2 +bit) % 5;
            if (curr == 0)
            output.Add(true);
            else
            output.Add(false);
        }
        return output;
    }
}