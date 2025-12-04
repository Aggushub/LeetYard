var possibleStringCount = function(word) {
    output = 1
    for (let i = 1; i < word.length; i++){
        let turtle = word[i-1];
        let hare = word[i];
        if (turtle == hare)
        output++;
    }
    return output;
    
};