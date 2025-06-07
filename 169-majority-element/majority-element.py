class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        majority_marks=len(nums)//2
        for each in set(nums):
            if nums.count(each)>majority_marks:
                return each