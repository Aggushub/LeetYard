class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        for( char each : letters){
            if (each > target){
                return each;
            }
        }
        return letters[0];
    }
}