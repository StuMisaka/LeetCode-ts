// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

// 说明：不允许修改给定的链表。

//  

// 示例 1：

// 输入：head = [3,2,0,-4], pos = 1
// 输出：tail connects to node index 1
// 解释：链表中有一个环，其尾部连接到第二个节点。


// 示例 2：

// 输入：head = [1,2], pos = 0
// 输出：tail connects to node index 0
// 解释：链表中有一个环，其尾部连接到第一个节点。


// 示例 3：

// 输入：head = [1], pos = -1
// 输出：no cycle
// 解释：链表中没有环。


// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/linked-list-cycle-ii

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

//哈希表
function detectCycle(head: ListNode | null): ListNode | null {
  let map = new Set();
  let node: ListNode | null = head;
  while(node){
    if(map.has(node)){
      return node
    }
    map.add(node);
    node = node.next;
  }
  return null
};

//快慢双指针
// 当发现slow 与 fast 相遇时，
// 我们再额外使用一个指针 ptr。起始，它指向链表头部；随后，它和 slow 每次向后移动一个位置。最终，它们会在入环点相遇

function detectCycle2(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let ptr: ListNode | null = head;
  while(slow && fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow == fast){
      while(ptr != slow && ptr && slow){
        slow = slow.next;
        ptr = ptr.next;
      }
      return ptr
    }
  }
  return null
}


