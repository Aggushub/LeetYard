var countHillValley = function(nums) {
    let count = 0;
    let prev = '';
    for (let i = 1;i<nums.length-1;i++){
        let left = i - 1;
        let right = i + 1;
        while(nums[left] == nums[i] && left >0){
            left--;
        }
        while(nums[right] == nums[i] && right < nums.length -1){
            right++;
        }
        if(nums[left]> nums[i] && nums[right] > nums[i]){
            if (prev !== 'V'){
            count++;
            }
            prev='V';
        }
        else if(nums[i]> nums[left] && nums[i] > nums[right]){
            if (prev !== 'H'){
            count++;
            }
            prev='H';
        }
        else{
            continue;
        }
    }
    return count;
    
};