int findMaxConsecutiveOnes(int* nums, int numsSize) {
    int max = 0;
    int cons = 0;
    for(int i = 0;i<numsSize;i++){
        if(nums[i] == 1){
            cons++;
            if (cons>max){
                max = cons;
            }
        }
        else
        cons = 0;
    }
    return max;
    
}