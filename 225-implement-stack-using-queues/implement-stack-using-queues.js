
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};


MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};


MyStack.prototype.pop = function() {
    if (this.queue1.length === 0 && this.queue2.length === 0)
    return null;
    while (this.queue1.length>1){
        this.queue2.push(this.queue1.shift());
    }
    const poppedValue = this.queue1.shift();
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return poppedValue;
};


MyStack.prototype.top = function() {
    if (this.queue1.length === 0 && this.queue2.length === 0)
    return null;
    while(this.queue1.length>1){
        this.queue2.push(this.queue1.shift());
    }
    const topNode = this.queue1[0];
    this.queue2.push(this.queue1.shift());
    [this.queue1,this.queue2] = [this.queue2,this.queue1];
    return topNode;
    
};

MyStack.prototype.empty = function() {
    return this.queue1.length === 0 && this.queue2.length ===0;
};
