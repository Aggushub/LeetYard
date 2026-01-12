class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        P , S = 1, 0
        while n > 0:
            d = n % 10
            P = P * d
            S = S + d
            n = n // 10
        return P - S