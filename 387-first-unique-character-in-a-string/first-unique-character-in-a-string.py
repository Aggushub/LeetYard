class Solution:
    def firstUniqChar(self, s: str) -> int:
        hash = {}

        for i in range(0,len(s)):
            if s[i] not in hash:
                hash[s[i]] = 1
            else:
                hash[s[i]]+=1
        
        for i in range(0,len(s)):
            if hash[s[i]] == 1:
                return i
        return -1