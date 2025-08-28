/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    FBA = [];
    for(let i = 1;i<=n;i++){
        if (i % 3 == 0 && i % 5 == 0)
        FBA.push("FizzBuzz");
        else if(i % 3 == 0)
        FBA.push("Fizz");
        else if(i % 5 == 0)
        FBA.push("Buzz");
        else
        FBA.push(String(i))
    }
    return FBA;
};