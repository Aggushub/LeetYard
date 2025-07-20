class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        currSum = 0
        for i in range(0,k):
            currSum += nums[i]

        maxSum = currSum

        for i in range(k,len(nums)):
            currSum = currSum + nums[i] - nums[i-k]
            maxSum = max(currSum,maxSum)
        return maxSum/k
        