class Solution:
    def calPoints(self, operations: List[str]) -> int:
        score = []
        for each in operations:
            if each == "C":
                score.pop()
            elif each == "D":
                score.append(score[-1]*2)
            elif each == "+":
                score.append(score[-1] + score[-2])
            else:
                score.append(int(each))
    
        return sum(score)