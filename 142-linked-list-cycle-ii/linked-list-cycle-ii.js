
var detectCycle = function(head) {
    if (!head)
    return null;
    if (!head.next)
    return null;
    let tortoise = head;
    let hare = head;
    while(hare && hare.next){
        hare = hare.next.next;
        tortoise = tortoise.next;
        if (hare === tortoise)
        break;
    }

    if (hare === tortoise)
        {
        let pointer = head;
        while(pointer !== tortoise){
            pointer = pointer.next;
            tortoise = tortoise.next
        }
        return tortoise;
    }
    return null;
};