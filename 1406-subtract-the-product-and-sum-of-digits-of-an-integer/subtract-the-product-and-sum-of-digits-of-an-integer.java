class Solution {
    public int subtractProductAndSum(int n) {
        int Pro = 1;
        int Sum = 0;
        while (n  > 0){
            int d = n % 10;
            Pro *= d;
            Sum += d;
            n = n / 10;
        }
        return Pro - Sum;
    }
}