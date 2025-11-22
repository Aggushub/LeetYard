class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        count = 0
        for each in nums:
            rem = each % 3
            if rem == 0:
                pass
            else:
                count+=1
        return count
            