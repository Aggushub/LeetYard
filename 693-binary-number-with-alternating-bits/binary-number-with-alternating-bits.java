class Solution {
    public boolean hasAlternatingBits(int n) {
        int b = n ^ (n >> 1);
        return (b & (b+1)) == 0;
    }
}