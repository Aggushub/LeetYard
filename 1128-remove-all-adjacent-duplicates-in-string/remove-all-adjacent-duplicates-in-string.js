/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let mystack = [];
    let top = "";
    for(let i = 0;i<s.length;i++){
        if (top === s[i])
            mystack.pop();
        else
            mystack.push(s[i]);

        top = mystack[mystack.length-1];
    }
    return mystack.join("");
};