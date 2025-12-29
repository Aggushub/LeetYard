public class Solution {
    public int[] RecoverOrder(int[] order, int[] friends) {
       HashSet<int> set = new HashSet<int>(friends);
       List<int> output = new List<int>();

       foreach(int e in order){
        if (set.Contains(e)){
            output.Add(e);
        }
       }
       return output.ToArray(); 
    }
}