class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        richest = 0
        for each in accounts:
            if sum(each) > richest:
                richest = sum(each)
        return richest 

        