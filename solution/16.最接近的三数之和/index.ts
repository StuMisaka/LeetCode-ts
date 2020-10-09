// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

//  

// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
//  

// 提示：

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum-closest

//双指针
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a,b) => a-b);
  const length = nums.length;
  let ans = nums[0] + nums[1] + nums[length-1];
  let min = Math.abs(target-ans);
  let j: number = 0;
  let k: number = 0;
  for(let i: number = 0; i < length; i++){
    j = i + 1;
    k = length - 1;
    while(j < k){
      let add = nums[i] + nums[j] + nums[k];
      if(Math.abs(target - add) < min){
        min = Math.abs(target - add);
        ans = add;
      }
      if(add < target){
        j++;
      }
      if(add > target){
        k--;
      }
      if(add == target){
        return add
      }
    }
  }
  return ans
};
