var findWordsContaining = function(words, x) {
    let out = [];
    for (let i = 0;i < words.length;i++){
        if (words[i].includes(x))
        out.push(i);
    }
    return out;
};