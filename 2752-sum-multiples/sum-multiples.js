
var sumOfMultiples = function(n) {
let sum = 0;
if (n < 3){
    return sum;
}    
for(let i = 3; i <= n ; i++){
    if (i % 3 === 0 || i % 5 ===0 || i % 7 === 0)
    {
        sum += i;
    }
}
    return sum;
};