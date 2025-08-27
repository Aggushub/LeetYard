class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        FBA = []
        for i in range(1,n+1):
            if ( i % 3 == 0 and i % 5 == 0):
                FBA.append("FizzBuzz")
            elif (i % 3 ==0):
                FBA.append("Fizz")
            elif (i % 5 == 0):
                FBA.append("Buzz")
            else:
                FBA.append(str(i))
        return FBA
        