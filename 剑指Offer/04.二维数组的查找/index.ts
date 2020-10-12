// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

import { umask } from "process";

//  

// 示例:

// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof

//线性查找
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if(!matrix || matrix.length == 0 || matrix[0].length == 0){
    return false
  }
  let i: number = 0;
  let j: number = matrix[0].length - 1;
  while(i < matrix.length && j >= 0){
    if(matrix[i][j] > target){
      j--
    }
    else if(matrix[i][j] < target){
      i++
    }
    else if(matrix[i][j] == target){
      return true
    }
  }

  return false
};
