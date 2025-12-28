class Solution {
    public int countNegatives(int[][] grid) {
        int count = 0;
        for (int[] row : grid){
            for (int column : row){
                if (column < 0)
                count++;
            }
        }
        return count;
        
    }
}