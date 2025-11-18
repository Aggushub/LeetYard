class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        if all(x==0 for x in bits) == True:
            return True
        stack = []
        while(len(bits)> 1):
            if bits[0] == 1:
                bits.pop(0)
                bits.pop(0)
            else:
                stack = bits.pop(0)
        return len(bits) == 1