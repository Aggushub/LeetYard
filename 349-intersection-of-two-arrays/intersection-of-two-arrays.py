class Solution(object):
    def intersection(self, nums1, nums2):
        nums3 = []
        for i in range(len(nums1)):
            for j in range(len(nums2)):
                if nums1[i] == nums2[j] and nums1[i] not in nums3:
                    nums3.append(nums1[i])
        return nums3