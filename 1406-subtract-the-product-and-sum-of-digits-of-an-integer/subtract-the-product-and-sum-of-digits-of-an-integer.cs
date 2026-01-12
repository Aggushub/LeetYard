public class Solution {
    public int SubtractProductAndSum(int n) {
        int Pro = 1;
        int Sum = 0;
        while(n>0){
            int d = n % 10;
            Pro = Pro * d;
            Sum = Sum + d;
            n = n / 10;
        }
        return Pro - Sum;
    }
}