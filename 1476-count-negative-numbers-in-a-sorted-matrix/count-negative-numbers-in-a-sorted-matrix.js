var countNegatives = function(grid) {
    let count = 0;

    for (row of grid){
        for (col of row){
            if (col<0)
            count++;
        }
    }
    return count;
    
};