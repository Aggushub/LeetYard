var totalMoney = function(n) {
    let sum = 0;
    let add = 0;
    let no = 0;
    for(let i = 1; i<=n;i++){
        if (i>n){
            sum += i;
        }
        else{
            no = i % 7;
            if (no == 0){
                sum += 7 + add;
                add++;
            }
            else{
                sum += (add+no)
            }
        }
    }
    return sum;
    
};