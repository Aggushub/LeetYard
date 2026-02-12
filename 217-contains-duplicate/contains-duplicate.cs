public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        HashSet <int> seth = new HashSet<int>(nums);
        return seth.Count != nums.Length;
    }
}