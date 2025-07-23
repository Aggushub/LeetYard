var isPalindrome = function(s) {
    let cs = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let i = 0;
    let j = cs.length-1;
    while(i<j){
        if (cs[i]!==cs[j])
        return false;
        else{
        i++;
        j--;
        }
    }
    return true;
};