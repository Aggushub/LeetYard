class Solution:
    def scoreOfString(self, s: str) -> int:
        sum = 0
        for each in range(0,len(s)-1):
            sum += abs((ord(s[each])-ord(s[each+1])))
        return sum

        