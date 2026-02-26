class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int output = 0;
        for(int each: hours){
            if(each >= target)
            output++;
        }
        return output;
    }
}