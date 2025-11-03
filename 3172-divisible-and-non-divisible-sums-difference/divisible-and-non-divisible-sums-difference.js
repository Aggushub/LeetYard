var differenceOfSums = function(n, m) {
    dsum = 0;
    ndsum = 0;
    for (let i = 1; i <=n; i++){
        if (i % m == 0)
        dsum += i;
        else 
        ndsum +=i;
    }
    return ndsum - dsum;
    
};