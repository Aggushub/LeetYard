class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        hash = {}
        out = []
        for each in nums:
            if each not in hash:
                hash[each] = 1
            else:
                out.append(each)
        return out
        