// Last updated: 6/8/2026, 11:51:55 AM
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const mod = (n: number, m: number): number => ((n % m) + m) % m;

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let tmp = new ListNode();
    const result = tmp;

    let total = 0, carry = 0;

    while (l1 || l2 || carry) {
        total = carry;

        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }

        const num = mod(total, 10);
        carry = Math.trunc(total / 10);
        tmp.next = new ListNode(num);
        tmp = tmp.next;
    }
    return result.next;
};