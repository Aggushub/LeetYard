class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        expected = sorted(heights)
        noma = 0
        for i in range(0,len(heights)):
            if heights[i] != expected[i]:
                noma +=1
        return noma

        