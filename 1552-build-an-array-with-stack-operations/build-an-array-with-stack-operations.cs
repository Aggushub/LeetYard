public class Solution {
    public IList<string> BuildArray(int[] target, int n) {
        IList<string> Output = new List<string>();
        int currIndex = 0;
        foreach (int num in target){
            while(currIndex+1 <num){
                Output.Add("Push");
                Output.Add("Pop");
                currIndex++;
            }
            Output.Add("Push");
            currIndex++;
        }
        return Output;
    }
}