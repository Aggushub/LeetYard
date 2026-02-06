var searchMatrix = function(matrix, target) {
    let columns = matrix[0].length;
    let rows = matrix.length;
    
    let top = 0;
    let bottom = rows-1;
    let middle = 0;

    while (top <= bottom){
        middle = Math.floor((top+bottom)/2);
        if (target < matrix[middle][0])
            bottom = middle-1;
        else if (target > matrix[middle][columns-1])
            top = middle + 1;
        else
            break;
    }
    if (top > bottom)
    return false;
    let left = 0;
    let right = columns-1;
    let mid = 0;
    while(left <= right){
        mid = Math.floor((left+right)/2);
        if(target > matrix[middle][mid])
            left = mid + 1;
            
        else if (target < matrix[middle][mid])
            right = mid - 1;     
        else
            return true;
        }
    return false;
    
};