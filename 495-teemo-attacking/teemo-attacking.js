var findPoisonedDuration = function(timeSeries, duration) {
    let curr = 0;
    let output = 0;

    for (let each of timeSeries){
        if (each > curr)
        output += duration;
        else
        output += each + duration - curr;

        curr = each + duration;
    }
    return output;
};