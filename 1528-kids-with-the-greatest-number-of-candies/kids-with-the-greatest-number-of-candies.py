class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        output = []
        maxCandy = max(candies)
        for each in candies:
            if (each + extraCandies) >= maxCandy:
                output.append(True)
            else:
                output.append(False)
        return output