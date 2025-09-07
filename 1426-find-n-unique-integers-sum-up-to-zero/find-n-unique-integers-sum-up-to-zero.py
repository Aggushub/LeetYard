import random
class Solution:
    def sumZero(self, n: int) -> List[int]:
       if n == 1:
            return [0]
       elif n == 2:
            return [1,-1]
       out = [0] * n
       left = 0
       right = n- 1
       num = 1
       while left<right:
            out[left] = num
            out[right] = num * -1
            num+= 1
            left += 1
            right -= 1
       return out
