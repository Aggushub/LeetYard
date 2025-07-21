class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        dicty={}
        counter=0
        for i in range(0,len(nums)):
            if nums[i] not in dicty.keys():
                nums[counter]=nums[i]
                counter+=1
                dicty[nums[i]]=1
            elif dicty[nums[i]] ==1:
                nums[counter]=nums[i]
                counter+=1
                dicty[nums[i]]+=1
        return counter
