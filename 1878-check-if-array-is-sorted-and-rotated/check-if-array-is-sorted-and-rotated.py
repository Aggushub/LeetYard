class Solution:
    def check(self, nums: List[int]) -> bool:
        srt = sorted(nums)
        for i in range(0,len(nums)):
            new_nums = srt[i:]+srt[:i]
            if new_nums == nums:
                return True
        return False
        