class Solution:
    def getNoZeroIntegers(self, n: int) -> List[int]:
        num1 = 1
        num2 = n - 1
        while True:
            if '0' in str(num2) or '0' in str(num1):
                num1 +=1
                num2 -=1
            else:
                break
        return [num1,num2]

        
        
        