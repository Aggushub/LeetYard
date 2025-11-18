class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        count = 0
        left = 0
        right = 0
        prev = ''
        for i in range(1,len(nums)-1):
            left = i-1
            right = i+1

            while nums[left] == nums[i]:
                if left == 0:
                    break
                else:
                    left -=1

            while nums[right] == nums[i]:
                if right == len(nums)-1:
                    break
                else:
                    right +=1
            
            if nums[left]>nums[i] and nums[right] > nums[i]:
                if prev != 'V': 
                    count +=1
                prev = 'V'
            elif nums[left]<nums[i] and nums[right] < nums[i]:
                if prev != 'H':
                    count += 1
                prev = 'H'
            else:
                continue
        return count
        