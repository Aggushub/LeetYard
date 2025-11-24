class Solution {
    public List<Boolean> prefixesDivBy5(int[] nums) {
      int curr = 0;
      List<Boolean> output = new ArrayList<>();
      for(int i = 0;i < nums.length; i++){
        curr = (curr*2+nums[i]) % 5;
        if (curr == 0)
        output.add(true);
        else
        output.add(false);
      } 
      return output;
    }
}