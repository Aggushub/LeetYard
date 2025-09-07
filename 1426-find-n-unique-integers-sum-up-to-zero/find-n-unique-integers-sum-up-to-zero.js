var sumZero = function(n) {
    let out = Array(n).fill(0);
    let left = 0;
    let right = n-1;
    let num = 1;
    while (left<right)
    {
        out[left] = num;
        out[right] = num * -1;
        left++;
        num++
        right--;   
    }
    return out;
};