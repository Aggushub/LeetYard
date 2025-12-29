class Solution {
    public int[] recoverOrder(int[] order, int[] friends) {
        List<Integer> output = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        for (int f : friends) {
            set.add(f);
        }
        for (int each : order){
            if (set.contains(each)){
                output.add(each);
            }
        }

        int[] result = new int[output.size()];
        for (int i = 0; i < output.size(); i++) {
            result[i] = output.get(i);
        }
        return result;
        }
}