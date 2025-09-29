var shuffle = function(nums, n) {
    let turtle = 0;
    let hare = n;
    let out = [];
    for(let i = 0; i < nums.length;i+=2){
        out[i] = nums[turtle];
        out[i+1] = nums[hare];
        turtle++;
        hare++;
    }
    return out;
};