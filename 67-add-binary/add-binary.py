class Solution:
    def addBinary(self, a: str, b: str) -> str:
        a = int(a, 2)
        b = int(b, 2)

        sumab = a + b
        sum_bin = bin(sumab)
        return sum_bin[2:]
        