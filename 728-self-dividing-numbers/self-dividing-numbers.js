var selfDividingNumbers = function(left, right) {
    let output = [];
    for (let i = left; i <= right; i++){
        if (i < 10)
        output.push(i);
        else{
            let isValid = true;
            let n = i;
        while(n>0){
            let d = n % 10;
            if ( d == 0 || i % d != 0)
            isValid=false;
            n = Math.floor(n / 10);
        }
        if (isValid)
        output.push(i);
    }
    }
    return output;
    
};