class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        n = len(letters)
        for i in range(n):
            if ord(letters[i]) > ord(target) :
                return letters[i]
        else:
            return letters[0]
        