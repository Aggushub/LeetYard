class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        output = 0
        curr = 0

        for each in timeSeries:
            if each > curr:
                output += duration
            else:
                output += each + duration - curr
            curr = each + duration
            
        return output


        