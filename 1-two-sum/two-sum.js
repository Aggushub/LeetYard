/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashtable = {};
    let neededvalue = 0;
    for(let i = 0;i<nums.length;i++){
        neededvalue = target - nums[i];
        if (neededvalue in hashtable)
        return [i,hashtable[neededvalue]]
        else
        hashtable[nums[i]] = i;
    }
    return [];
};