var addTwoNumbers = function(l1, l2) {
    const sumList = new ListNode(0);
    let result = sumList;
    let carry = 0;
    while(l1 || l2 || carry) {
        let l1value = l1? l1.val:0;
        let l2value = l2? l2.val:0;

        let sum = (l1value+l2value+carry)
        let NewValue = sum % 10;
        carry = Math.floor(sum/10);

        result.next = new ListNode(NewValue)
        result = result.next
    l1 = l1? l1.next:null;
    l2 = l2? l2.next:null;
    }
    return sumList.next;
    
};