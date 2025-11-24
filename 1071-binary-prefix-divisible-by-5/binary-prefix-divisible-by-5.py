class Solution:
    def prefixesDivBy5(self, nums: List[int]) -> List[bool]:
        output = []
        curr = 0
        for bit in nums:
            curr = (curr * 2 + bit) % 5
            if curr == 0:
                output.append(True)
            else:
                output.append(False)
        return output
        