var permuteUnique = function(nums) {

    let res = [];
    let n = nums.length;

    let permutations = function(i){
        if ( i === nums.length-1){
            res.push([...nums]);
            return;
        }
        let hash = {};
        for ( let j = i; j< nums.length; j++){
            if (!hash[nums[j]]){
                hash[nums[j]] = 1;
                [nums[i],nums[j]] = [nums[j],nums[i]];
                permutations(i+1);
                [nums[i],nums[j]] = [nums[j],nums[i]];
            }
        }
    }
    
    permutations(0);
    return res;
};