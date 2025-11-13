var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b);
    let cd = arr[1] - arr[0];
    for(let i = 2;i <arr.length;i++){
        let diff = arr[i] - arr[i-1];
        if (diff != cd){
            return false;
        }
    }
    return true;
};