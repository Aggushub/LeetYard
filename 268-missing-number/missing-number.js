var missingNumber = function(nums) {
    let l = nums.length + 1;
    const sum_nums = nums.reduce((acc,curval) => acc + curval,0);
    let sum_og = 0;
    for(let i = 0;i <l;i++){
        sum_og += i;
    }
    return  sum_og - sum_nums;
};