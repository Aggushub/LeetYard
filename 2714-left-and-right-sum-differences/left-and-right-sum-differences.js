var leftRightDifference = function(nums) {
    let lsum = 0, rsum = 0;
    let output = [];

    for(let i = 0; i < nums.length;i++){
        rsum += nums[i];
    }
    
    for(let i = 0; i < nums.length; i++){
        rsum -= nums[i];
        output.push(Math.abs(lsum - rsum));
        lsum += nums[i];
    }
    return output;
    
};