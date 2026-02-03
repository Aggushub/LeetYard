class Solution {
    public boolean isTrionic(int[] nums) {
        int ion = 0;
        int l = nums.length;
        if (l <= 3 || nums[1] < nums[0] || nums[l-2] > nums[l-1])
        return false;
        for(int i = 1; i < l; i++){
            if(ion == 2 || ion == 0){
            if (nums[i] > nums[i-1])
            continue;
            else if (nums[i] == nums[i-1])
            return false;
            else
            ion++;
        }
        else{
            if (nums[i] < nums[i-1])
            continue;
            else if (nums[i] == nums[i-1])
            return false;
            else
            ion++;
        } 
        }
        return ion == 2;
    }
}