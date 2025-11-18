class Solution(object):
    def isOneBitCharacter(self, bits):
        i = 0
        length = len(bits)-1
        while i < length:
            if bits[i] == 1:
                i +=2
            else:
                i += 1
        return i == length