/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head)
    return false;
    if(!head.next)
    return false;
    let hare = head;
    let turtle = head;
    while (hare && hare.next) {
        hare = hare.next.next;
        turtle = turtle.next;
        if (hare === turtle)
        return true;
    }
    return false;
};