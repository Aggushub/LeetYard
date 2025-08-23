class Solution:
    def scoreOfString(self, s: str) -> int:
        score = 0
        for each in range(1,len(s)):
            score += abs((ord(s[each])-ord(s[each-1])))
        return score

        