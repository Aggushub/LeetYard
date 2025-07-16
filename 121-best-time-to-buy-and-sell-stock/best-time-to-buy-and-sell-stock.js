var maxProfit = function(prices) {
    let profit = 0;
    let left = 0
    for (let right =1;right<prices.length;right++){
        if (prices[left]>prices[right])
        left = right;
        else
        profit = Math.max(profit,prices[right]-prices[left])
    }
    return profit
};