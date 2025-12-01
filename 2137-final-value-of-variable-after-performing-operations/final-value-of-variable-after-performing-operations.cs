public class Solution {
    public int FinalValueAfterOperations(string[] operations) {
        int X = 0;
        foreach(string each in operations){
            if (each.Contains("+"))
            X++;
            else
            X--;
        }
        return X;
        
    }
}