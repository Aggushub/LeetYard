class Solution:
    def alternatingSum(self, nums: List[int]) -> int:
        curr = 1
        output = 0
        for each in nums:
            output = output + (curr * each)
            curr *= -1
        return output
