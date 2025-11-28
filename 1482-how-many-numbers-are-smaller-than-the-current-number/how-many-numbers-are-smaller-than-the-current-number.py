class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        sortedNums = sorted(nums)
        hash = {}
        output = []
        for i in range(len(sortedNums)):
            if sortedNums[i] not in hash:
                hash[sortedNums[i]] = i
        
        for each in nums:
            output.append(hash[each])
        
        return output

            
        