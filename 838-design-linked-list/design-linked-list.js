//Designing singly linked list

class Node{
        constructor(value){
            this.value = value;
            this.next = null;
        }
}

var MyLinkedList = function() {
            this.head = null;
            this.tail = null;
            this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (this.length === 0|| index >= this.length || index < -1){
        return -1;
    }

    let current = this.head;
    for(let i = 0;i<index;i++){
        current = current.next;
    }
    return current.value;

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newnode = new Node(val);
    if (this.length === 0){
        this.head = newnode;
        this.tail = newnode;
    }
    else{
        newnode.next = this.head;
        this.head = newnode;
    }
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newnode = new Node(val);
    if (this.length === 0){
        this.head = newnode;
        this.tail = newnode;
    }
    else{

        this.tail.next = newnode;
        this.tail = newnode;
    }
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const newnode = new Node(val);
    if (index > this.length || index < -1){
        return -1;
    }
    else if (index === 0 && this.length === 0){
        this.head = newnode;
        this.tail = newnode;
    }
    else if (index === 0 && this.length > 0)
    {
        newnode.next = this.head;
        this.head = newnode;
    }
    else if (index == -1 || index === this.length){
        this.tail.next = newnode;
        this.tail = newnode;
    }
    else{
        let tempnode = this.head;
        for(let i =0;i<index-1;i++){
            tempnode = tempnode.next;
        }
        newnode.next = tempnode.next;
        tempnode.next = newnode;
    }
    this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (this.length === 0 || index >=this.length || index < 0)
        return -1;
    if (index === -1 || index === this.length-1){
        let prev = this.head;
        for (let i=0;i<this.length-1;i++){
            prev = prev.next;
        }
        let poppednode = this.tail;
        prev.next = null;
        this.tail = prev;
    }
     if(index===0){
            let temp = this.head;
            this.head = temp.next;
            this.length --;
            if(this.size===0){
                this.tail = null;
            }
            return temp.value;
        }
    else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        const toDelete = prev.next;
        prev.next = toDelete.next;

        if (index === this.length - 1) {
            this.tail = prev; 
    }

    this.length--;
    return toDelete.value;
};
            

};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */