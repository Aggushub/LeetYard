/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let hash = {};
    let out = [];
    for (let i = 0;i<nums.length;i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }
        else{
            hash[nums[i]]++;
            out.push(nums[i]);
        }
    }
    return out;
};