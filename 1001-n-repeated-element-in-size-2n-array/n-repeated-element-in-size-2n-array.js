var repeatedNTimes = function(nums) {
    let hash = {};
    for (let each of nums){
        if (!hash[each]){
            hash[each] = 1;
        }
        else{
            return each;
        }
    }
};