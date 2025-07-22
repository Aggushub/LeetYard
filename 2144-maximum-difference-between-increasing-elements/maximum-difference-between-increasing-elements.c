int maximumDifference(int* nums, int numsSize) {
    int min = nums[0];
    int maxdiff = -1;
    for (int i = 0; i<numsSize;i++){
        if (nums[i]>min){
            int diff = nums[i]- min;
            if (diff > maxdiff)
            maxdiff = diff;
        }
        else
        min = nums[i];
    }
    return maxdiff;
}