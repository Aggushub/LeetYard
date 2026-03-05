class Solution:
    def minOperations(self, s: str) -> int:
        count1 = 0
        count2 = 0

        for i in range(len(s)):
            expected1 = str(i % 2)
            expected2 = str((i+1) % 2)

            if s[i] != expected1:
                count1 += 1
            if s[i] != expected2:
                count2 += 1
        
        return min(count1, count2)
        