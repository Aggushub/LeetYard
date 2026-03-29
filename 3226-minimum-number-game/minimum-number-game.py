class Solution(object):
    def numberGame(self, nums):
        output = []
        while nums:
            A = min(nums)
            nums.remove(A)
            B = min(nums)
            nums.remove(B)
            output.append(B)
            output.append(A)
        return output
            
            