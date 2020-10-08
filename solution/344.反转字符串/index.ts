// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

//  

// 示例 1：

// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
// 示例 2：

// 输入：["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-string

/**
 Do not return anything, modify s in-place instead.
 */

 //双指针
function reverseString(s: string[]): void {
  const length: number = s.length;
  let i: number = 0;
  let j: number = length - 1;
  for(let l: number = 0; i + l < j - l; l++){
    let num = s[i+l];
    s[i+l] = s[j-l];
    s[j-l] = num;
  }
};
