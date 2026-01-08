class Solution {
    public int maximumWealth(int[][] accounts) {
        int richest  = 0;
        for(int i = 0; i < accounts.length;i++){
            int wealth = Arrays.stream(accounts[i]).sum();
            if (wealth > richest)
            richest = wealth;
        }
        return richest;
    }
}