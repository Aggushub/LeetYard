public class Solution {
    public int[] SmallerNumbersThanCurrent(int[] nums) {
        int l =nums.Length;
        int[] output = new int[l];
        Dictionary<int,int> hash = new Dictionary<int,int>();
        int[] sorted = (int[])nums.Clone();
        Array.Sort(sorted);
        
        for (int i = 0; i < l; i++ ){
            if (!hash.ContainsKey(sorted[i]))
            hash[sorted[i]] = i;
        }

        for (int i = 0; i< l; i++){
            output[i] = hash[nums[i]];
        }
        return output;
    }
}