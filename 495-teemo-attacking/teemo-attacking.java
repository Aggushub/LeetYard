class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        int output = 0;
        int curr = 0;

        for(int each : timeSeries){
            if (each > curr)
            output += duration;
            else
            output += each + duration - curr;

            curr = each + duration;
        }
        return output;
    }
}