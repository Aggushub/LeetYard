var smallerNumbersThanCurrent = function(nums) {
    hash = {};
    output = [];
    sortedNums = [...nums];
    sortedNums.sort((a,b)=>a-b);
    
    for (let i = 0;i < nums.length;i++){
        if (!(sortedNums[i] in hash)){
            hash[sortedNums[i]] = i;
        }
    }
    for (each of nums){
        output.push(hash[each]);
    }
    return output;
    
};