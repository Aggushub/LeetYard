class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        Sum = 0
        length = 9999999
        for right in range(0,len(nums)):
            Sum += nums[right]
            while Sum >= target:
                currLength = right - left + 1
                length = min(length, currLength)
                Sum -= nums[left]
                left+=1
        if length == 9999999:
            return 0
        else:
            return length