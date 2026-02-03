var isTrionic = function(nums) {
  let ion = 0;
  let l = nums.length;
  if (l <= 3 || nums[0] > nums[1] || nums[l-1] < nums[l-2])
  return false;
  for(let i = 1; i < l; i++){
    if(ion == 0 || ion == 2){
        if(nums[i-1] < nums[i])
        continue;
        else if (nums[i] < nums[i-1])
        ion++;
        else
        return false;
    }
    else{
         if(nums[i-1] > nums[i])
        continue;
        else if (nums[i] > nums[i-1])
        ion++;
        else
        return false;
    }
  } 
  return ion == 2; 
};