class Solution:
    def totalMoney(self, n: int) -> int:
        sum = 0
        no = 0
        mul = 1
        for num in range(1,n+1):
            if num <=7:
                sum +=num
            else:
                no = num % 7
                if no == 0:
                    sum += 7 + mul
                    mul +=1
                else:
                    sum += (no + mul)     
        return sum