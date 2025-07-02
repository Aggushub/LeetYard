var reverseList = function(head) {
    let curr = head;
    let rev = null;
    while(curr){
        let next = curr.next;
        curr.next = rev;
        rev = curr;
        curr = next    
    }
    return rev;
};