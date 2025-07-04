/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    if(head === null)
    return false;

    let current = head;
    let arr =[];
    while(current){
        arr.push(current.val);
        current = current.next;
    }
    let left = 0;
    let right = arr.length-1;

    while(left<right){
        if(arr[left]!==arr[right])
        return false;
        left++;
        right--;
    }
    return true;
    
};