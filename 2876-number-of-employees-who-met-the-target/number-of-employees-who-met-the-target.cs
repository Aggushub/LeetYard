public class Solution {
    public int NumberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int op = 0;
        foreach(int each in hours){
            if(each >= target)
            op++;
        }
        return op;
    }
}