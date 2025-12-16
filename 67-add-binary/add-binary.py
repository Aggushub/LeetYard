class Solution:
    def addBinary(self, a: str, b: str) -> str:
        a = int(a,2)
        b = int(b,2)
        sumab = a + b
        sumab = bin(sumab)
        return sumab[2:]
        