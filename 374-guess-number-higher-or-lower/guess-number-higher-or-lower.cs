public class Solution : GuessGame {
    public int GuessNumber(int n) {
        int left = 1;
        int right = n;
        while(left <= right){
            int mid = left+(right-left)/2;
            int result = guess(mid);
            if (result == 1)
            left = mid + 1;
            else if ( result == 0)
            return mid;
            else
            right = mid - 1;
        }
        return -1;
    }
}