var hasAlternatingBits = function(n) {
    let b = n ^ n >> 1;
    return (b & b+1) == 0;
};