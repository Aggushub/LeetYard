from math import sqrt
class Solution:
    def areaOfMaxDiagonal(self, dimensions: List[List[int]]) -> int:
        D = 0
        maxi = 0
        maxp = 0
        p = 0
        for l,w in dimensions:
            D = (l*l) + (w*w)
            p = l * w
            if D> maxi:
                maxi = D
                maxp = p
            elif D == maxi:
                maxp = max(maxp,p)
        return maxp
            

                
            

        