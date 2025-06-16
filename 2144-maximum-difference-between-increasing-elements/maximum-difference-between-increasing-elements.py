class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        maxdiff = 0
        for i in range(0,len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i]<nums[j]:
                    dif = nums[j] - nums[i]
                    if dif > maxdiff:
                        maxdiff = dif
        if maxdiff>0:
            return maxdiff
        else:
            return -1