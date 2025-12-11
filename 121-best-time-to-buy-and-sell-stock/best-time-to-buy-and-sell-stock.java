class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int min = prices[0];
        for (int i = 0; i < prices.length;i++){
            int curr_pro = prices[i] - min;
            profit = Math.max(profit, curr_pro);
            min = Math.min(min, prices[i]);
        }
        return profit;
        
    }
}