class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
      seen = {}
      maxi = 0
      start = 0
      for i in range(len(s)):
        char = s[i]
        if char in seen:
            start = max(start, seen[char]+1)
        seen[char] = i
        maxi = max(maxi, i+1 - start)
      return maxi