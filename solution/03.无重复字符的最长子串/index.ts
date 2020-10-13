// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
//滑动窗口
function lengthOfLongestSubstring(s: string): number {
  let ans: number = 0;
  let map = new Set();
  let j: number = 0;
  for(let i: number = 0; i < s.length; i++){
    if(i){
      map.delete(s[i-1]);
    }
    while(j < s.length && !map.has(s[j])){
      map.add(s[j]);
      j++;
    }
    ans = Math.max(ans, j - i);
  }
  return ans
};
