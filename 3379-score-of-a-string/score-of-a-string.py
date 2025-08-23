class Solution:
    def scoreOfString(self, s: str) -> int:
        sum = 0
        for each in range(1,len(s)):
            sum += abs((ord(s[each])-ord(s[each-1])))
        return sum

        