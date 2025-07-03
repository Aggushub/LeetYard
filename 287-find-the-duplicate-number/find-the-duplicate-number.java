class Solution {
    public int findDuplicate(int[] nums) {
        int hare = 0;
        int turtle = 0;

        while(true){
            hare = nums[nums[hare]];
            turtle = nums[turtle];
            if (hare == turtle){
                int pointer = 0;
                while(pointer != turtle){
                    pointer = nums[pointer];
                    turtle = nums[turtle];
                }
                return pointer;
            }
        }
        
    }
}