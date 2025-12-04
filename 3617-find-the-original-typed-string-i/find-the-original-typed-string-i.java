class Solution {
    public int possibleStringCount(String word) {
        int output = 1;
        for(int i = 1; i < word.length(); i++){
            char turtle = word.charAt(i-1);
            char hare = word.charAt(i);

            if (turtle == hare)
            output++;
        }
        return output;
        
    }
}