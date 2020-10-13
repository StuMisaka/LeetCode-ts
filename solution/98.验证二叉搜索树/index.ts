// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

// 假设一个二叉搜索树具有如下特征：

// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
// 示例 1:

// 输入:
//     2
//    / \
//   1   3
// 输出: true
// 示例 2:

// 输入:
//     5
//    / \
//   1   4
//      / \
//     3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
//      根节点的值为 5 ，但是其右子节点值为 4 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/validate-binary-search-tree

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

//二叉树中序遍历
function isValidBST(root: TreeNode | null): boolean {
  let arr: number[] = []
  const dfs = (node: TreeNode | null) => {
    if(!node) return 
    dfs(node.left);
    arr.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  for(let i:number = 1; i < arr.length; i++){
    if(arr[i] < arr[i-1]) return false
  }
  return true
};
