import java.util.Set;
import java.util.HashSet;
class Solution {
    public boolean checkIfPangram(String sentence) {
        Set<Character> letters = new HashSet<>();

        for (char ch : sentence.toCharArray()){
            letters.add(ch);
        }

        return letters.size() == 26;
    }
}