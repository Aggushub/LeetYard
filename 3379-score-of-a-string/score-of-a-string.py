class Solution:
    def scoreOfString(self, s: str) -> int:
        prev = ord(s[0])
        sum = 0
        for i in range(1, len(s)):
            now = ord(s[i])
            sum = sum + abs(prev-now)
            prev = now
        return sum
