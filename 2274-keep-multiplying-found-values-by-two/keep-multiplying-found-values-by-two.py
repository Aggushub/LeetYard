class Solution(object):
    def findFinalValue(self, nums, original):
        found = 0
        while found != 1:
            for each in nums:
                if each == original:
                    found = 0
                    original *=2
                    break
                found = 1
        return original

            
        