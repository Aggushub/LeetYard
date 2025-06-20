/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let Bool = true;
    let l = nums.length;
    let first = nums[0]
    let last = nums[l-1]
    if (l<=1)
    return Bool;
            if(first>last){
                for(let i=0;i<l;i++){
                    if(nums[i]<nums[i+1]){
                        Bool = false;
                        return Bool;
                    }
                }
            }
            else{
                for(let i=0;i<l;i++){
                    if(nums[i]>nums[i+1]){
                        Bool = false;
                        return Bool;
                    }
                }
            }
return Bool;
}