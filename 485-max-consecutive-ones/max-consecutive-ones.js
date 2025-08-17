var findMaxConsecutiveOnes = function(nums) {
    let max = 0, cons = 0;
    for (let i = 0; i < nums.length; i++) {
        cons = nums[i] === 1 ? cons + 1 : 0;
        if (cons > max) max = cons;
    }
    return max;
};