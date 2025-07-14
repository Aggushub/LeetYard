/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let end = height.length-1;
    let start = 0;
    let maxw = 0;
    let w = 0;
    while(start!=end){
        length = end - start;
        w = Math.min(height[start], height[end]) * length;
        maxw = Math.max(w,maxw)
        if (height[start]<height[end])
        start++;
        else
        end--;
    }
    return maxw;
};