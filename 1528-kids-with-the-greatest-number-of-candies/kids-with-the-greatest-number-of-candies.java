class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> output = new ArrayList<Boolean>();
        int max = 0;
        for (int each : candies){
            if (max < each)
            max = each;
        }
        for (int each : candies){
            if (each + extraCandies >= max)
            output.add(true);
            else
            output.add(false);
        }
        return output;
        
    }
}