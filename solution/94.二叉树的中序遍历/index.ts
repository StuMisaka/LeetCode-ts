// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal

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

//dfs递归中序遍历
function inorderTraversal(root: TreeNode | null): number[] {
  let ans: number[] = [];
  const dfs = (node: TreeNode | null) => {
    if(!node)  return 
    dfs(node.left);
    ans.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  return ans
};