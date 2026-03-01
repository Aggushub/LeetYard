var guessNumber = function(n) {
    let left = 1, right = n;
    while(left <= right){
        let mid = Math.floor((right + left)/2);
        let result = guess(mid);
        if (result == -1)
            right = mid - 1;
        else if(result == 1)
            left = mid + 1;
        else
        return mid;
    }
    
};