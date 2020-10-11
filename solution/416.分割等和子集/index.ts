import { any } from "bluebird-lst";
// 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

import { boolean } from "yargs";

// 注意:

// 每个数组中的元素不会超过 100
// 数组的大小不会超过 200
// 示例 1:

// 输入: [1, 5, 11, 5]

// 输出: true

// 解释: 数组可以分割成 [1, 5, 5] 和 [11].
//  

// 示例 2:

// 输入: [1, 2, 3, 5]

// 输出: false

// 解释: 数组不能分割成两个元素和相等的子集.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/partition-equal-subset-sum

//01背包问题
//动态规划
function canPartition(nums: number[]): boolean {
  let length: number = nums.length;
  let sum: number = 0;
  let target: number = 0;

  if(length < 2){
    return false
  }
  for(let num of nums){
    sum += num;
  }
  if((sum & 1) === 1){
    return false
  }
  else{
    target = sum / 2;
  }
  let dp: any[][] = new Array(length);
  for(let i: number = 0; i < length; i++){
    dp[i] = (new Array(target+1));
  }
  //状态转移方程: dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]
  for(let j: number = 0; j < target + 1; j++){
    if(j == nums[0] || j == 0){
      dp[0][j] = true;
    }
    else{
      dp[0][j] = false;
    }
  }
  for(let i: number = 1; i < length; i++){
    for(let j: number = 0; j < target + 1; j++){
      dp[i][j] = dp[i-1][j]
      if( j == nums[i]){
        dp[i][j] = true;
      }
      if( j > nums[i]){
        dp[i][j] = dp[i-1][j] || dp[i-1][j - nums[i]];
      }
    }
    
  }

  return dp[length-1][target] 
};

let test = [1,2,5];
console.log(canPartition(test));