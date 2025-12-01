/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0;
    for(let each of operations){
        if (each[1] === "+")
        X++;
        else
        X--;
    }
    return X;
    
};