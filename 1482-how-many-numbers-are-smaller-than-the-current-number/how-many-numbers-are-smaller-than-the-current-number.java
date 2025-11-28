class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int l = nums.length;
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        int[] output = new int[l];

        Map<Integer,Integer> hash = new HashMap<>();

        for (int i = 0; i < l; i++){
            hash.putIfAbsent(sorted[i],i);
        }

        for (int i = 0; i < l; i++){
            output[i] = hash.get(nums[i]);
        }
        return output;
    }
}