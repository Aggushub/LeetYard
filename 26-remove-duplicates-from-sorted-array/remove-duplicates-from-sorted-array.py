class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        dictx={}
        counter=0
        for i in range(0,len(nums)):
            if nums[i] not in dictx.keys():
                nums[counter]=nums[i]
                dictx[nums[i]]=1
                counter+=1
        return counter
