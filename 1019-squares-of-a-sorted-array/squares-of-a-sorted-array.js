/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const newArray = new Array(nums.length).fill(0);
    let leftindex = 0;
    let rightindex = nums.length-1;
    for(let i=nums.length-1; i>=0; i--)
    {
        const leftSquared = Math.pow(nums[leftindex],2);
        const rightSquared = Math.pow(nums[rightindex], 2);
        if (leftSquared > rightSquared)
        {
            newArray[i]=leftSquared;
            leftindex++;
        }
        else
        {
            newArray[i]=rightSquared;
            rightindex--;
        }
    }
   return newArray; 
};