var minimumOperations = function(nums) {
    let count = 0;
    for (let each of nums){
        let rem = each % 3;
        if (rem === 0)
        continue;
        else
        count++;
    }
    return count;
    
};