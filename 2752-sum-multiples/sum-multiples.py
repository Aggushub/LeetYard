class Solution:
    def sumOfMultiples(self, n: int) -> int:
        sum = 0
        if n < 3:
            return sum
        for i in range(3,n+1):
            if i % 3 == 0:
                sum += i
            elif i % 5 == 0:
                sum += i
            elif i % 7 == 0:
                sum += i
        
        return sum
        