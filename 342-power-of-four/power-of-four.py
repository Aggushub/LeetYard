class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n == 1:
            return True
        if n%2 != 0:
            return False
        if n>1 and n%2 == 0:
            return self.isPowerOfFour(n/4)
        return False
        
        