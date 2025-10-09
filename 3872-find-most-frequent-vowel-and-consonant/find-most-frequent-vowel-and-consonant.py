from collections import Counter
class Solution:
    def maxFreqSum(self, s: str) -> int:
        c = Counter(s)
        vowels = ['a','e','i','o','u']
        maxv = 0
        maxc= 0
        for key, value in c.items():
            if key in vowels:
                maxv = max(maxv, value)
            else:
                maxc = max(maxc, value)
        return maxv+maxc