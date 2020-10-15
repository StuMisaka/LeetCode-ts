// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

//  

// 说明：

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
//  

// 示例：

// 输入：
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出：[1,2,2,3,5,6]
//  

// 提示：

// -10^9 <= nums1[i], nums2[i] <= 10^9
// nums1.length == m + n
// nums2.length == n

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-sorted-array

/**
 Do not return anything, modify nums1 in-place instead.
 */
//从前向后遍历
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i: number = 0;
  let j: number = 0;
  let copy: number[] = [];
  copy = nums1.slice(0);
  const length = nums1.length
  for(let l: number = 0; l < length; l++){
    nums1.pop();
  }
  while(i < m && j < n){
    if(copy[i] <= nums2[j]){
      nums1.push(copy[i]);
      i++;
    }
    else{
      nums1.push(nums2[j]);
      j++;
    }
  }
  if(i < m){
    for(let l: number = i; l < m; l++){
      nums1.push(copy[l]);
    }
  }
  if(j < n){
    for(let l: number = j; l < n; l++){
      nums1.push(nums2[l]);
    }
  }
};

//从后往前遍历
function merge(nums1: number[], m: number, nums2: number[], n: number): void{
  let i: number = m - 1;
  let j: number = n - 1;
  let k: number = m + n - 1;
  while(i >= 0 && j >= 0){
    if(nums1[i] >= nums2[j]){
      nums1[k] = nums1[i];
      k--;
      i--;
    }
    else{
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
  nums1.splice(0,j+1,...nums2.slice(0,j+1));
}
