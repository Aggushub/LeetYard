/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let score = [];
    for (let each of operations){
        if (each == "+")
        score.push(score[score.length-1]+score[score.length-2]);
        else if (each == "D")
        score.push(score[score.length-1]*2);
        else if (each == "C")
        score.pop();
        else
        score.push(parseInt(each))
    }
    let sum = score.reduce((sum, num) => sum + num, 0);
    return sum;
};