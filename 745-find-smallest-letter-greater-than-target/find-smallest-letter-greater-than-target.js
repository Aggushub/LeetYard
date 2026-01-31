
var nextGreatestLetter = function(letters, target) {
    for(let each of letters){
        if (each > target)
        return each;
    }
    return letters[0];    
};