class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        output = []
        currIndex = 0
        for i in range(1,n+1):
            
            if i != target[currIndex]:
                output.append("Push")
                output.append("Pop")
            else:
                output.append("Push")
                currIndex +=1
            if target[-1] == i:
                break
        return output

        