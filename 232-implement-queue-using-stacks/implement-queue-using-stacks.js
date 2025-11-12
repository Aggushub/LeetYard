
var MyQueue = function() {
    this.instack = [];
    this.outstack = [];
};


MyQueue.prototype.push = function(x) {
    this.instack.push(x);
    
};


MyQueue.prototype.pop = function() {
    if (this.outstack.length === 0){
        while(this.instack.length){
            this.outstack.push(this.instack.pop());
        }
    }
    return this.outstack.pop();
    
};

MyQueue.prototype.peek = function() {
    if (this.outstack.length === 0){
        while (this.instack.length){
            this.outstack.push(this.instack.pop());
        }
    }
    return this.outstack[this.outstack.length-1];
};


MyQueue.prototype.empty = function() {
    return this.instack.length === 0 && this.outstack.length === 0;
};

