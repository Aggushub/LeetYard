class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        output = []
        for i in range(left, right+1):
            if i < 10:
                output.append(i)
            else:
                num_str = str(i)
                isValid = True
                for each in num_str:
                    each = int(each)
                    if each == 0 or i % each != 0:
                        isValid = False
                if isValid:
                    output.append(i)
        return output