public class Solution {
    public int MaxProfit(int[] prices) {
        int min = prices[0];
        int profit = 0;
        for (int i = 0; i < prices.Length; i++){
            int curr_prof  =  prices[i] - min;
            min = Math.Min(min,prices[i]);
            profit = Math.Max(profit, curr_prof);
        }
        return profit;
    }
}