class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        pSum = [0] * len(nums)
        pSum[0] = nums[0]
        for i in range(1, len(nums)):
            pSum[i] = pSum[i-1] + nums[i]
        return pSum
