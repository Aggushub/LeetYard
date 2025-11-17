class Solution:
    def kLengthApart(self, nums: List[int], k: int) -> bool:
        last1Index = -1
        for i in range(0,len(nums)):
            if nums[i] == 1:
                last1Index = i
                break
        if last1Index == -1:
            return True
        start = last1Index + 1
        for i in range(start,len(nums)):
            if nums[i] == 1:
                if ((i - last1Index) - 1) >= k:
                    last1Index = i
                    continue 
                else:
                    return False
        return True