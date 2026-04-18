class Solution:
    def mirrorDistance(self, n: int) -> int:
        if n < 10:
            return 0
        rev = 0
        temp = n
        while n > 0:
            d = n % 10
            rev = rev * 10 + d
            n = n // 10
        return abs(temp - rev)
        