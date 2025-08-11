class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        hash = {}
        count = 0
        for each in jewels:
            hash[each] = True
        for each in stones:
            if each in hash:
                count+=1
        return count
        