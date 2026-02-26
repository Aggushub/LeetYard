class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        output = 0
        for each in hours:
            if each >= target:
                output+=1
        return output
        