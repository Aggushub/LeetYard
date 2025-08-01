class Solution:
    def removeDuplicates(self, s: str) -> str:
        output = []
        for i in range(0,len(s)):
            if output and output[-1] == s[i]:
                output.pop()
            else:
                output.append(s[i])
        return "".join(output)
        