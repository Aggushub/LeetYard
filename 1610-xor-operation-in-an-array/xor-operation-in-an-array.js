var xorOperation = function(n, start) {
    let nums = [];
    for(let i = 0; i < n; i++){
        nums.push(start + 2 * i);
    }
    output = nums[0];
    for (let i = 1; i < nums.length; i ++){
        output ^= nums[i];
    }
    return output;    
};