// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的。

// 进阶：

// 你能尝试使用一趟扫描实现吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list

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


//双指针
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  let last: ListNode | null =head;
  while(n){
    fast = fast!.next;
    n--
  }
  if(!fast) return head!.next
  while(fast){
    last = slow;
    slow = slow!.next;
    fast = fast.next;
  }
  last!.next = slow!.next;
  return head
}