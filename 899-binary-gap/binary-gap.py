class Solution:
    def binaryGap(self, n: int) -> int:
        b = str(bin(n))
        left = 0
        right = 0
        output = 0
        for i in range(2,len(b)):
            if b[i] == "1" and left == 0:
                left = i
            elif b[i] == "1" and left != 0:
                right = i
                diff = right - left
                output = max(diff,output)
                left = right
                right = 0
        return output