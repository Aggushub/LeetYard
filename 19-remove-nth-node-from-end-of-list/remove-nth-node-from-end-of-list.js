//This solution is done using Floydd Hare-Turtle algorithm

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0,head) //Creating a dummy node at the start of the
    let turtle = dummy;                //the linked list with val 0;
    let hare = dummy;                  // Initializing hare and turtle with dummy
    
    for (let i=0;i<n;i++){ // The purpose of this loop is to make one pointer 
    hare = hare.next;      //in this case (hare) n steps ahead;
    }
    while(hare.next!== null){ //Normal loop till hare reaches end and turtle would be
        turtle = turtle.next; // n steps behind hare
        hare = hare.next;
    }
    turtle.next = turtle.next.next; // Removing the nth node from the end of the list
    return dummy.next;
};