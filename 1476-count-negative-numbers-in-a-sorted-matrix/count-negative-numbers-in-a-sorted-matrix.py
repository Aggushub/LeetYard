class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        count = 0
        for each in grid:
            for i in range(0,len(each)):
                if each[i] < 0:
                    count +=1
        return count


