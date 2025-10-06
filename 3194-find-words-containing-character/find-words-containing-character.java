import java.util.ArrayList;

class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
        ArrayList<Integer> out = new ArrayList<>();
        int index = 0;
        for(String word: words){
            if (word.indexOf(x) != -1){
            out.add(index);
            }
            index++;
        }
        return out;
    }
}