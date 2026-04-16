var minSubArrayLen = function(target, nums) {
    let left  = 0;
    let length = Infinity;
    let currSum = 0;
    for(let right = 0 ; right < nums.length; right++){
        currSum += nums[right];
        while(currSum >= target){
            newLength = right - left + 1;
            if (newLength < length){
            length = newLength;
            }
            currSum -= nums[left];
            left++;
        }
    }

    return length !== Infinity? length:0;
};