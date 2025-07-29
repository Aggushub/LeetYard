var groupAnagrams = function(strs) {
    let sorted = strs.map(x => x.split('').sort().join(''));
    let hash = {};
    for (let i = 0;i < strs.length;i++){
        if (!hash[sorted[i]]){
         hash[sorted[i]] = [strs[i]];   
        }
        else
        hash[sorted[i]].push(strs[i]);
    }
    return Object.values(hash);  
};