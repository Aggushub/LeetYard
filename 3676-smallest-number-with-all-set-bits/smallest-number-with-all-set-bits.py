class Solution(object):
    def smallestNumber(self, n):
        if n > 0 and n <3:
            return 1
        if n == 3:
            return 3
        if n >= 4 and n <8:
            return 7
        if n >= 8 and n <16:
            return 15
        if n >= 16 and n <32:
            return 31
        if n >= 32 and n <64:
            return 63
        if n >= 64 and n <128:
            return 127
        if n >= 128 and n <256:
            return 255
        if n >= 256 and n <512:
            return 511
        if n >= 512 and n <=1000:
            return 1023