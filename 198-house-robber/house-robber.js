var rob = function(nums) {
let n = nums.length;
if (n === 1)
    return nums[0];

let dp = [];
dp.push(nums[0]);
dp.push(Math.max(nums[0],nums[1]));
for(let i = 2; i < n;i++){
    dp[i] = Math.max(dp[i-1],nums[i]+dp[i-2]);
}

return dp[dp.length-1];

};