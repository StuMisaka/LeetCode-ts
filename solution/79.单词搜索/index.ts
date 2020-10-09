// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

//  

// 示例:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// 给定 word = "ABCCED", 返回 true
// 给定 word = "SEE", 返回 true
// 给定 word = "ABCB", 返回 false
//  

// 提示：

// board 和 word 中只包含大写和小写英文字母。
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/word-search


//DFS
function exist(board: string[][], word: string): boolean {
  const width: number = board.length;
  const height: number = board[0].length;
  const length: number = word.length;
  const dfs = (i: number,j: number,k: number): boolean => {
    if(i >= width || j >= height || i < 0 || j < 0){
      return false
    }
    if(board[i][j] != word[k]){
      return false
    }
    else{
      if(k == length - 1){
        return true
      }
      else{
        let letter = board[i][j];
        board[i][j] = '#';
        if(dfs(i+1,j,k+1))  return true
        if(dfs(i-1,j,k+1))  return true
        if(dfs(i,j+1,k+1))  return true
        if(dfs(i,j-1,k+1))  return true
        board[i][j] = letter;
      }
    }
    return false
  }
  for(let i: number = 0; i < width; i++){
    for(let j: number = 0;j < height; j++){
      let k: number = 0;
      if(dfs(i,j,k)){
        return true
      }
    }
  }
  return false
};
