// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

//  

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists

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

 //循环遍历
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let ans = new ListNode()
  let pre = ans;
  while(l1 && l2){
    if(l1.val < l2.val){
      pre.next = l1;
      l1 = l1.next;
    }
    else{
      pre.next = l2;
      l2 = l2.next;
    }
  }
  pre.next = l1 === null ? l2 : l1;

  return ans.next
};