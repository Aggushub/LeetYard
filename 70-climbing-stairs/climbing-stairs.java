class Solution {
    public int climbStairs(int n) {
        if (n == 1)
        return 1;
        else if (n == 2)
        return 2;

        List<Integer> dp = new ArrayList<>();
        dp.add(1);
        dp.add(2);

        for(int i = 2; i < n; i++){
            dp.add(dp.get(i-1) + dp.get(i-2));
        }
        return dp.get(n-1);
    }
}