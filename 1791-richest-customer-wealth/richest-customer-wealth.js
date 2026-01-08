var maximumWealth = function(accounts) {
    let richest = 0;
    for (let each of accounts){
        let wealth = each.reduce((sum,acc) => sum + acc, 0);
        if (wealth > richest){
            richest = wealth;
        }
    }
    return richest; 
};