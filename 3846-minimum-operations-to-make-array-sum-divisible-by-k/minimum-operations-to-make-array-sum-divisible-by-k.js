var minOperations = function(nums, k) {
 let Sum = nums.reduce((sum,num)=>sum+num,0);
 return Sum%k   
};