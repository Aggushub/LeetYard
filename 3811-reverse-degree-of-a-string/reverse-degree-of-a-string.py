class Solution(object):
    def reverseDegree(self, s):
        op = 0
        index = 1
        for digit in s:
            val = 123 - ord(digit)
            op += (index * val)
            index += 1
        return op
        
        