public class Solution {
    public int FindTheWinner(int n, int k) {
        int survivor = 0;
        for (int i = 2; i <= n; i++){
            survivor = (survivor + k) % i;
        }
        return survivor+1;
    }
}