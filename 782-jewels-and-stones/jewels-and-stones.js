var numJewelsInStones = function(jewels, stones) {
    let hash = {};
    let count = 0;
    for (let char of jewels){
        hash[char] = true;
    }
    for (let char of stones){
        if (hash[char])
        count++;
    }
    return count;
};