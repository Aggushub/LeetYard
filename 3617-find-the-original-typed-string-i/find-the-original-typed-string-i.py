class Solution:
    def possibleStringCount(self, word: str) -> int:
        turtle = ""
        hare = ""
        output = 1
        for i in range(0,len(word)-1):
            turtle = word[i]
            hare = word[i+1]
            if turtle == hare:
                output +=1

        return output
        
                



