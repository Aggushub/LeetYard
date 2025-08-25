class Solution:
    def kthGrammar(self, n: int, k: int) -> int:
        if k == 1 or n == 1:
            return 0
        length = pow(2,n-1)
        mid = length/2
        if k <= mid:
            return self.kthGrammar(n-1,k)
        else:
            return 1 - self.kthGrammar(n-1,k -mid)
        