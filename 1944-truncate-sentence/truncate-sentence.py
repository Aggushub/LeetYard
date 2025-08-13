class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        p = 0
        f=""
        for each in s:
            if each == " ":
                p+=1
                if p == k:
                    break
                f+=each
            else:
                f+=each
        return f