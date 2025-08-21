class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        l = len(code)
        Op =[0] * l
        if k == 0:
            return Op
        if k > 0:
            for nums in range(0,l):
                sum = 0
                for i in range(1,k+1):
                    pos = (nums+i)%l
                    sum += code[pos]
                Op[nums] = sum
            return Op
                
            
        if k < 0:
            for nums in range(0,l):
                sum = 0
                for i in range(1,abs(k)+1):
                    pos = (nums - i) % l
                    sum += code[pos]
                Op[nums] = sum
            return Op
            
        