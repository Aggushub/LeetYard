public class Solution {
    public bool HasAlternatingBits(int n) {
        int b = n ^ n >>1;
        return (b & b+1) == 0;
    }
}