var shuffle = function(nums, n) {
    let turtle = 0;
    let hare = n;
    let out = [];
    while(turtle<n){
        out.push(nums[turtle]);
        out.push(nums[hare]);
        turtle++;
        hare++;
    }
    return out;
};