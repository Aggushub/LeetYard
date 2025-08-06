double findMaxAverage(int* nums, int numsSize, int k) {
    int currSum = 0;
    for(int i = 0;i<k;i++)
    currSum += nums[i];

    int maxSum = currSum;

    for(int i = k;i<numsSize;i++){
        currSum = currSum + nums[i] - nums[i-k];
        if (currSum > maxSum)
        maxSum = currSum;
    }

    return (double)maxSum/k;
}