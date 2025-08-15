class Solution:
    def reverse(self, x: int) -> int:
        d = 0
        rev = 0
        sign = 1 if x > 0 else -1
        num = abs(x)

        while(num>0):
            d = num % 10
            rev = rev * 10 + d
            num = num // 10
        rev = rev * sign
        if rev < (-2 ** 31) or rev > (2 ** 31)-1:
            return 0
        return rev