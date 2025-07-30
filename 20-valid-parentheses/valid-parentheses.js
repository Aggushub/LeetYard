var isValid = function(s) {
    let stack = [];
    let top = "";
    let close = "";
    for(let i = 0;i<s.length;i++){
        if (stack.length === 0){
            stack.push(s[i]);
            top = s[i];
            continue;
        }
        if (top === "{")
            close = "}";
        else if (top === "[")
            close = "]";
        else if (top == "(")
            close = ")";
        else
        close = ""
        if (close === s[i]){
            stack.pop();
            top = stack[stack.length-1];
        }
        else{
            stack.push(s[i]);
            top = s[i];
    }
    }
    return stack.length === 0;
};