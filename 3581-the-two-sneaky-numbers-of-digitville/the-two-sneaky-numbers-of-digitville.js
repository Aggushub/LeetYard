var getSneakyNumbers = function(nums) {
    let town = {};
    let sneakers = [];
    for (each of nums){
        if (each in town)
        sneakers.push(each);
        else
        town[each] = 1;
    }
    return sneakers;
    
};