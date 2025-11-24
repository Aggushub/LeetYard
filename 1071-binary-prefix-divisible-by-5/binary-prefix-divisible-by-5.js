var prefixesDivBy5 = function(nums) {
let output = [];
let curr = 0;
for (let bit of nums){
    curr = (curr*2 + bit) % 5;
    if (curr === 0)
    output.push(true);
    else
    output.push(false);
}    
return output;
};