var kLengthApart = function(nums, k) {
    let last1 = -1
    for(let i = 0; i <nums.length; i++){
        if(nums[i] == 1){
        last1 = i;
        break;
        }
    }
    if (last1 == -1)
    return true;
    
    let start = last1 + 1;
    for(let i = start;i<nums.length;i++){
            if (nums[i] == 1){
                if (((i - last1) - 1) >= k){
                    last1 = i;
                    continue;
                }
                else{
                    return false;
                }
            }
    }
    return true;
};