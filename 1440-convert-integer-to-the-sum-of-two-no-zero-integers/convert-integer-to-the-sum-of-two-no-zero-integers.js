var getNoZeroIntegers = function(n) {
    for (let i= 0;i<n;i++){
        if (String(i).includes('0'))
        continue;
    j = n - i;
    if (String(j).includes('0'))
    continue;
    return [i,j];
    }
};