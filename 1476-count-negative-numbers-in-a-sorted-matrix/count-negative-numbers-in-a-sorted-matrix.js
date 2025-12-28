var countNegatives = function(grid) {
    let count = 0;

    for (let row of grid){
        for (let col of row){
            if (col<0)
            count++;
        }
    }
    return count;
    
};