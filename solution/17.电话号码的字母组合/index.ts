// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number




//DFS
function letterCombinations(digits: string): string[] {
  if (digits.length == 0){
    return []
  }
  let res: string[] = [];
  let map = new Map()
    .set("2","abc")
    .set("3","def")
    .set("4","ghi")
    .set("5","jkl")
    .set("6","mno")
    .set("7","pqrs")
    .set("8","tuv")
    .set("9","wxyz")

    const dfs = (curStr: string,i: number) => {
      if(i > digits.length - 1){
        res.push(curStr);
        return
      }
      const letters: string = map.get(digits[i]);
      for(const l of letters){
        dfs(curStr + l,i +1 );
      }
    }

    dfs('',0);
    return res
};

//BFS
function letterCombinations2(digits: string): string[] {
  if(digits.length == 0){
    return []
  }
  const length = digits.length;
  const map = new Map()
    .set("2","abc")
    .set("3","def")
    .set("4","ghi")
    .set("5","jkl")
    .set("6","mno")
    .set("7","pqrs")
    .set("8","tuv")
    .set("9","wxyz")
  
  let queue: string[] = [""];

  for(let i: number = 0;i < length; i++){
    let levelSize = queue.length;
    for(let j:number = 0;j < levelSize; j++){
      const curStr = queue.shift();
      const letters: string = map.get(digits[i]);
      for(const l of letters){
        queue.push(curStr + l);
      }
    }
  }
  return queue
}
