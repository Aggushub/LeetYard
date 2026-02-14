var merge = function(intervals) {
intervals.sort((a,b)=>a[0] - b[0]);
const result = [intervals[0]];
for(let i = 0; i < intervals.length; i++){
    const currentStart = intervals[i][0];
    const currentEnd = intervals[i][1];
    const lastEnd = result[result.length-1][1];

    if (currentStart <= lastEnd){
        result[result.length-1][1] = Math.max(lastEnd, currentEnd);
    }
    else{
        result.push([currentStart,currentEnd]);
    }
}
return result;    
};