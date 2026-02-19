class Solution:
    def countBinarySubstrings(self, s: str) -> int:
        prev = 0
        curr = 1
        output = 0

        for i in range(1,len(s)):
            if s[i-1] == s[i]:
                curr+=1
            else:
                output += min(prev, curr)
                prev = curr
                curr = 1
        output += min(prev,curr)

        return output