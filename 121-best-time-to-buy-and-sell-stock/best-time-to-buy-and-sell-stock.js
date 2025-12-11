var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0]
    for (let each of prices){
        min = Math.min(min,each);
        curr_profit = each - min;
        profit = Math.max(curr_profit,profit)
    }
    return profit;
    
};