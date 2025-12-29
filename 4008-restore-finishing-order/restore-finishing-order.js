var recoverOrder = function(order, friends) {
    let output = [];
for (let x of order) {
    if (friends.includes(x)) {
        output.push(x);
    }
}
return output;
}