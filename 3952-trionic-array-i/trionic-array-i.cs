public class Solution {
    public bool IsTrionic(int[] nums) {
        int ion = 1;
        int l = nums.Length;
        if ( l <= 3 || nums[0] > nums[1] || nums[l-2] > nums[l-1])
        return false;
        for(int i = 1; i < l; i++){
            if (ion == 1 || ion == 3){
                if(nums[i-1] < nums[i])
                continue;
                else if (nums[i-1] > nums[i])
                ion++;
                else
                return false;
            }
            else{
                if (nums[i-1] > nums[i])
                continue;
                else if (nums[i-1] < nums[i])
                ion++;
                else
                return false;
            }
        }
        return ion == 3;
    }
}