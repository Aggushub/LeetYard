var findClosest = function(x, y, z) {
    let xd = Math.abs(z - x);
    let yd = Math.abs(z - y);

    if (xd > yd )
    return 2;
    else if (yd > xd)
    return 1;
    else
    return 0;
    
    
};