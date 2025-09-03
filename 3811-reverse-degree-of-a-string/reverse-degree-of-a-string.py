class Solution:
    def reverseDegree(self, s: str) -> int:
        op = 0
        index = 1
        for digit in s:
            val = 123 - ord(digit)
            op += (index * val)
            index += 1
        return op