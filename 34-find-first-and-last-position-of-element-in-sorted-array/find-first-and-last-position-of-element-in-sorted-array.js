var searchRange = function(nums, target) {
    const leftExtreme = findLeftExtreme(nums, target);
    const rightExtreme = findRightExtreme(nums, target);

    let range = [leftExtreme, rightExtreme];
    return range;
};

const findLeftExtreme = function(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(target > nums[middle])
            left = middle + 1;
        else if (target < nums[middle])
            right = middle - 1;
        else{
            if (middle === 0)
            return 0;
            if(target === nums[middle - 1])
            right = middle - 1;
            else
            return middle;
        }
    }
    return -1;
}

const findRightExtreme = function(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let middle = Math.floor((left + right)/ 2);
        if (target > nums[middle])
            left = middle + 1;
        else if (target < nums[middle])
            right = middle - 1;
        else{
            if(middle ===nums.length - 1)
            return middle;
            if(target === nums[middle+1])
            left = middle + 1;
            else
            return middle;
    }
    }
    return -1;
}