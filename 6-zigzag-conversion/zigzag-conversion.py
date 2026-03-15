class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        output = ""
        cycle = 2 * numRows - 2

        for i in range(numRows):
            for j in range(i, len(s),cycle):
                output += s[j]

                if i != 0 and i != numRows - 1 and j + cycle - 2*i < len(s):
                    output += s[j + cycle - 2*i]
        return output

        