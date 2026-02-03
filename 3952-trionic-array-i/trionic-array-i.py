class Solution:
    def isTrionic(self, nums: List[int]) -> bool:
        if len(nums) <= 3 or nums[1] < nums[0] or nums[len(nums)-1] < nums[len(nums)-2]:
            return False

        ion = 0
        for i in range(1, len(nums)):
            if ion == 0 or ion == 2:
                if nums[i-1] < nums[i]:
                    continue
                elif nums[i-1] == nums[i]:
                    return False
                else:
                    ion +=1
            elif ion == 1:
                if nums[i-1] > nums[i]:
                    continue
                elif nums[i-1] == nums[i]:
                    return False
                else:
                    ion +=1
        
        return ion == 2
            


        