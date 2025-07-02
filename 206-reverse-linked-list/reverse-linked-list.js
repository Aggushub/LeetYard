var reverseList = function(head) {
    if (head === null)
    return null;
    else{
    let curr = head;
    let rev = null;
    while(curr){
        let next = curr.next;
        curr.next = rev;
        rev = curr;
        curr = next    
    }
    return rev;
    }
};