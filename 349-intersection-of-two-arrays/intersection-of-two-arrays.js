/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const seen = new Set(nums1)
    const result = new Set();
    for(const num of nums2){
        if (seen.has(num))
            result.add(num)
    }
    return Array.from(result)
};