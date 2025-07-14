var deleteMiddle = function(head) {
    if (!head || !head.next) 
    return null;
    const dummy = new ListNode(0,head)
    let turtle = dummy;
    let hare = head;

    while(hare && hare.next){
        hare= hare.next.next;
        turtle = turtle.next;
    }
    turtle.next = turtle.next.next;
    return dummy.next;
};