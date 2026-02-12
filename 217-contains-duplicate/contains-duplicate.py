class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hash = {}
        for each in nums:
            if each not in hash:
                hash[each]= 1
            else:
                return True
        return False
        