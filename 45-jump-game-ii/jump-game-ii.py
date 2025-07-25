class Solution:
    def jump(self, nums: List[int]) -> int:
        res = 0
        l = r = 0

        while r < len(nums) - 1:
            furthermost = 0
            for i in range(l, r + 1):
                furthermost = max(furthermost, nums[i] + i)
            l = r + 1
            r = furthermost
            res += 1
        return res
