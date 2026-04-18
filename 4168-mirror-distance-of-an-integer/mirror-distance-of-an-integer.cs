public class Solution {
    public int MirrorDistance(int n) {
        if (n < 10)
        return 0;

        int temp = n;
        int rev = 0;

        while(temp > 0){
            int d = temp % 10;
            rev = rev * 10 + d;
            temp = temp / 10;
        }
        
        return Math.Abs(n - rev);
    }
}