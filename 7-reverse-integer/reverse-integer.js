var reverse = function(x) {
    let d= 0;
    let rev = 0;
    let sign = x < 0? -1:1;
    let num = Math.abs(x);
    while (num>0){
        d = num % 10;
        rev = (rev * 10) + d;
        num = Math.floor(num / 10);
    }
    if (rev < -(2**31) || rev > 2**31 - 1) 
    return 0;

    rev *= sign;
    return rev;
    
};