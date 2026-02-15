class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        output = 0
        for i in range(0,len(timeSeries)):
            poison = duration -1
            if output == 0:
                output += duration
            elif timeSeries[i] == timeSeries[i-1] + poison:
                output += poison
            elif timeSeries[i] < timeSeries[i-1] + poison:
                output = output - (duration -(timeSeries[i]-timeSeries[i-1]))
                output += duration
            else:
                output += duration
            
        return output


        