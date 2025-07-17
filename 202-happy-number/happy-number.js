var isHappy = function(n) {
    let hashmap = {};
    let num = n;
    if (n<0)
    return false;
    else
    while (true){  
        let sum = num.toString().split('').reduce((acc, digit) => acc + Math.pow(Number(digit), 2), 0);
        if (sum == 1)
        return true;
        else if (sum in hashmap)
        return false;
        else
        hashmap[sum] = num;
        num = sum;
    }
};