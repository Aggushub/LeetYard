class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        sneakers = []
        hash = {}
        for each in nums:
            if each in hash:
                sneakers.append(each)
            else:
                hash[each] = 1
        return sneakers
        