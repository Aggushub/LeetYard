var NumArray = function(nums) {
    let n = nums.length;
    this.P = new Array(n+1).fill(0);
    for(let i = 1;i < n+1; i++){
        this.P[i] = this.P[i-1] + nums[i-1];
    }
};


NumArray.prototype.sumRange = function(left, right) {
    return this.P[right+1] - this.P[left];
    
};

