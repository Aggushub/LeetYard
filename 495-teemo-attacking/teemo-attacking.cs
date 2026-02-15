public class Solution {
    public int FindPoisonedDuration(int[] timeSeries, int duration) {
      int output = 0;
      for(int i = 0; i < timeSeries.Length-1;i++){
        output += Math.Min(duration, timeSeries[i+1]-timeSeries[i]);
      }
      return output + duration;  
    }
}