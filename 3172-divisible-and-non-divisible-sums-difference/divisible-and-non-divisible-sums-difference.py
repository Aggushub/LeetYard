class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        ndsum = 0
        dsum = 0
        for i in range(1,n+1):
            if(i%m == 0):
                dsum = dsum+i
            else:
                ndsum=ndsum+i
        return ndsum - dsum
