class Solution:
    def countPrimes(self, n: int) -> int:
        if n <=2:
            return 0
        prime = [True] * (n+1)

        p = 2
        while p * p <= n:
            if prime[p]:

                for i in range(p*p,n+1,p):
                    prime[i] = False
            p += 1
        
        output = 0
        for p in range(2,n):
            if prime[p]:
                output += 1
        
        return output

