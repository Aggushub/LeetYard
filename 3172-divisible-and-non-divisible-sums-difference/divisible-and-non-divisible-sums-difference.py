class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        dsum = 0
        ndsum = 0
        for i in range(1,n+1):
            if i % m == 0 :
                dsum += i
            else:
                ndsum += i
        return ndsum- dsum

        