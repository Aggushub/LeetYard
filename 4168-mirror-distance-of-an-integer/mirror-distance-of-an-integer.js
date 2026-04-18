var mirrorDistance = function(n) {
    if (n < 10)
    return 0;
    let rev = 0;
    let temp = n;
    while(temp > 0){
        let d = temp % 10;
        rev = rev * 10 + d;
        temp = Math.floor(temp / 10);
    }
    return Math.abs(n - rev);
    
};