class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        output = []
        for i in range(0,len(nums)):
            L = sum(nums[0:i])         
            R = sum(nums[i+1:])
            output.append(abs(L- R))
        return output


        