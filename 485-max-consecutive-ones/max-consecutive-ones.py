class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maxi, cons = 0, 0
        for dig in nums:
            cons = cons + 1 if dig == 1 else 0
            maxi = max(cons,maxi)
        return maxi
        