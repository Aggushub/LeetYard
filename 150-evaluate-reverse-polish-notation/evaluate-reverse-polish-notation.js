/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const validOp = {
        "+":(n1,n2)=>n1+n2,
        "-":(n1,n2)=>n1-n2,
        "*":(n1,n2)=>n1*n2,
        "/":(n1,n2)=>Math.trunc(n1/n2)
    }
    for (let token of tokens){
        if(validOp[token]){
            let n2 = stack.pop();
            let n1 = stack.pop();
            let result = validOp[token](n1,n2);
            stack.push(result);
        }
        else
        stack.push(parseInt(token))
    }
    return stack.pop();
};