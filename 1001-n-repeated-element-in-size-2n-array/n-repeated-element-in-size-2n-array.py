class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        hash = {}
        for each in nums:
            if each not in hash:
                hash[each] = 1
            else:
                return each
        