/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let cons = 0;
    for(let dig of nums){
        if (dig === 1){
            cons++;
            max = Math.max(cons,max);
        }
        else
        cons = 0;
    }
    return max;
    
};