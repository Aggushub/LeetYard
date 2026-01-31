class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        output = 123
        flag = 0
        for each in letters:
            if ord(each)> ord(target):
                output = min(output,ord(each))
                flag = 1
        if flag == 0:
            return letters[0]
        else:

            return chr(output)
        