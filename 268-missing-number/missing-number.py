class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        l = len(nums) + 1
        sum_nums = sum(nums)
        sum_og = sum(x for x in range(1,l))
        return sum_og - sum_nums
        