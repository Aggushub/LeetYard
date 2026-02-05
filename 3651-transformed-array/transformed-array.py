class Solution:
    def constructTransformedArray(self, nums: List[int]) -> List[int]:
        l = len(nums)
        output = [0] * l
        for i in range(0,l):
            if nums[i] > 0:
                index = (i + nums[i]) % l
                output[i] = nums[index]
            elif nums[i] < 0:
                index = ((l + i) + (nums[i])) % l
                output[i] = nums[index]
            else:
                output[i] = nums[i]
        return output
        