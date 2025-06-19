/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    if (k ==0)
    {
    return;
}
let lastE = nums.splice(nums.length-k,k);
nums.unshift(...lastE);
return nums;
};