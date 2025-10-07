/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let hash = new Set();
    
    for (each of sentence)
    hash.add(each);

    if (hash.size == 26)
    return true;
    else
    return false;
};