var alternatingSum = function(nums) {
    let curr = 1;
    let output = 0;
    for (let each of nums){
        output += (each * curr);
        curr *= -1;
    }
    return output;
};