public class Solution {
    public int FindClosest(int x, int y, int z) {
        int xd = Math.Abs(z - x);
        int yd = Math.Abs(z - y);

        if (xd == yd)
        return 0;
        else if (xd < yd)
        return 1;
        else
        return 2;
    }
}