class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0,0);
    this.tail = new Node(0,0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    
};

LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) 
    return -1;

    const node = this.map.get(key);
    this._remove(node);
    this._add(node);
    return node.value;
};


LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)){
        this._remove(this.map.get(key));
    }
    const newNode = new Node(key, value);
    this._add(newNode);
    this.map.set(key, newNode);

    if(this.map.size > this.capacity){
        const lru = this.tail.prev;
        this._remove(lru);
        this.map.delete(lru.key);
    }
    
};

LRUCache.prototype._add = function(node){
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node; 
};

LRUCache.prototype._remove = function(node){
    node.prev.next = node.next;
    node.next.prev = node.prev
};