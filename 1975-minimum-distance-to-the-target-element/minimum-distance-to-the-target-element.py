class Solution:
    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:
        mini = len(nums)
        for i in range(0,len(nums)):
            if target == nums[i]:
                mini = min(mini, abs(i-start))
                
        return mini

        