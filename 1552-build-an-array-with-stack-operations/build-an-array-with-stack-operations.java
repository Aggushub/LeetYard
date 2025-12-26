class Solution {
    public List<String> buildArray(int[] target, int n) {
        List<String> stackOp = new ArrayList<>();
        int currIndex = 0;
        for (int i = 1; i <= n; i++){
            if (i == target[currIndex]){
                currIndex++;
                stackOp.add("Push");
            }
            else{
                stackOp.add("Push");
                stackOp.add("Pop");
            }
            if (i == target[target.length - 1])
            break;
        }
        return stackOp;

    }
}