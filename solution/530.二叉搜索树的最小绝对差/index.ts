// 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

//  

// 示例：

// 输入：

//    1
//     \
//      3
//     /
//    2

// 输出：
// 1

// 解释：
// 最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
//  

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst

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

 //DFS中序遍历
function getMinimumDifference(root: TreeNode | null): number {
  let ans: number = Infinity;
  let pre: number = -1;
  const dfs = (node: TreeNode | null) => {
    if(!node)  return
    dfs(node.left);
    if(pre == -1){
      pre = node.val;
    }
    else{
      ans = Math.min(ans,node.val - pre);
      pre = node.val;
    }
    dfs(node.right)
  }

  dfs(root);
  
  return ans
};
