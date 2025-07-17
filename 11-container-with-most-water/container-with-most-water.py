class Solution:
    def maxArea(self, height: List[int]) -> int:
        start = 0
        end = len(height)-1
        mw = 0
        while start!=end:
            length = end - start
            w = (min(height[start],height[end])) * length
            mw = max(w,mw)
            if height[start]<height[end]:
                start+=1
            else:
                end-=1
        return mw
        