class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        nums = []
        for i in range(0, n):
            nums.append(start + 2 * i)
        output = nums[0]
        for i in range(1,len(nums)):
            output = output ^ nums[i]
        return output
