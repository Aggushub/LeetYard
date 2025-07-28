var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start = 0;
    const seen = {};
    for (let i = 0;i < s.length;i++){
        let char = s[i];
        if (char in seen && seen[char]+1 > start){
            start = seen[char]+1;
        }
        seen[char] = i;
        max = Math.max(max, i+1-start);
    }
    return max;
    
};