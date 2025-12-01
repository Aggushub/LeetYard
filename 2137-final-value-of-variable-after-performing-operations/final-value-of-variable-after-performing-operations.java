class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int X = 0;
        for(String each : operations){
           if (each.contains("+")){
                X++;
           }
           else
           X--;
        }
        return X;
    }
}