var numberOfEmployeesWhoMetTarget = function(hours, target) {
let output = hours.filter(each => each >= target);
return output.length;   
};