class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        if len(nums)<=1:
            return True
        else:
            first = nums[0]
            last = nums[len(nums)-1]
            if first > last:
                for i in range(0,len(nums)-1,1):
                    if nums[i] < nums[i+1]:
                        return False
            else:
                for i in range(0,len(nums)-1,1):
                    if nums[i] > nums[i+1]:
                        return False
        return True
