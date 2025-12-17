public class Solution {
    IList<IList<int>> res = new List<IList<int>>();

    public IList<IList<int>> Permute(int[] nums) {
        helper(nums, 0);
        return res;
        
    }

    public void helper(int[] nums, int i){
        if (i == nums.Length-1){
            res.Add(new List<int>(nums));
            return;
        }

        for(int j = i; j < nums.Length;j++){
            swap(nums,i,j);
            helper(nums,i+1);
            swap(nums,i,j);
        }
    }
    public void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}