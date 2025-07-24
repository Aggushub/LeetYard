var findRepeatedDnaSequences = function(s) {
    const L = 10;
    const len = s.length;
    let seen = new Set();
    let output = new Set();
    for (let start = 0; start<=len-L;start++){
        let seq = s.slice(start,start+L);
        if (seen.has(seq))
        output.add(seq);

        seen.add(seq);
    }
    return Array.from(output);
};