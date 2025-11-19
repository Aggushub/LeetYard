class Solution {
    public int findFinalValue(int[] nums, int original) {
        int found = 0;
        while(found != 1){
            for(int i = 0; i<nums.length;i++){
                if (nums[i] == original){
                    found = 0;
                    original *= 2;
                    break;
                }
                found = 1;
            }
        }
        return original;
    }
}