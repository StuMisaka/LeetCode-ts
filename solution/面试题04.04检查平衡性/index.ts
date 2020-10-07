// 实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。


// 示例 1:
// 给定二叉树 [3,9,20,null,null,15,7]
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true 。
// 示例 2:
// 给定二叉树 [1,2,2,3,3,null,null,4,4]
//       1
//      / \
//     2   2
//    / \
//   3   3
//  / \
// 4   4
// 返回 false 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/check-balance-lcci


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */



//DFS
function isBalanced(root: TreeNode | null): boolean {
  let ans: boolean = true;
  const dfs = (node: TreeNode | null): number => {
    if(!node){
      return 0
    }
    else{
      let left = dfs(node.left);
      let right = dfs(node.right);
      if(Math.abs(left - right) > 1){
        ans = false
      }
      return Math.max(left,right) + 1
    }
  }
  dfs(root);

  return ans

};