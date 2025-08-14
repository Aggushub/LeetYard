/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let p = 0;
    let trun = "";
    for (let each of s){
        if (each == " "){
            p++;
            if (p == k)
            break;
            trun += each;
        }
        else
        trun += each;
    }
    return trun;
};