var buildArray = function(target, n) {
    let output = [];
    let currIndex = 0;
    for (let i = 1; i <= n; i++){
        if (i === target[currIndex]){
            output.push("Push");
            currIndex++;
        }
        else{
            output.push("Push");
            output.push("Pop");
        }
        if (i === target[target.length-1])
        break;
    }
    return output;
};