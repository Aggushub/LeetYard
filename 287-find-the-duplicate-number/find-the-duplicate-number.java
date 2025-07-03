class Solution {
    public int findDuplicate(int[] nums) {
        int rabbit = 0;
        int turtle = 0;

        while(true){
            rabbit = nums[nums[rabbit]];
            turtle = nums[turtle];
            if (rabbit == turtle){
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