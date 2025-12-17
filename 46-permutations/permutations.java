class Solution {
     List<List<Integer>> res = new ArrayList<>();


    public List<List<Integer>> permute(int[] nums) {
        helper(nums,0);
        return res;
        
    }

    public void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        }

    public void helper(int[] nums,int i){
            if (i == nums.length-1){
                List<Integer> temp = new ArrayList<>();
                for (int num : nums) temp.add(num);
                res.add(temp);
                return;
            }

            for (int j = i; j< nums.length; j++){
                swap(nums,i,j);
                helper(nums,i+1);
                swap(nums,i,j);
            }
        }
}