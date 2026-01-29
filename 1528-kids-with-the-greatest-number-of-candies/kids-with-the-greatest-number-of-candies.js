var kidsWithCandies = function(candies, extraCandies) {
let output = [];
let max = Math.max(...candies);

for (let each of candies){
    if (each + extraCandies >= max)
    output.push(true);
    else
    output.push(false);
}
return output;
};