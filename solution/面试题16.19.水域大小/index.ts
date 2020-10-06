// 你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。

// 示例：

// 输入：
// [
//   [0,2,1,0],
//   [0,1,0,1],
//   [1,1,0,1],
//   [0,1,0,1]
// ]
// 输出： [1,2,4]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/pond-sizes-lcci


//BFS
function pondSizes(land: number[][]): number[] {
  let res: number[] = [];
  let count: number;
  const dfs = (i: number,j: number) => {
    if(i >= land.length || j >= land[0].length || i < 0 || j < 0){
      return
    }
    if(!land[i][j]){
      count++;
      land[i][j] = 1;
      dfs(i + 1,j);
      dfs(i,j + 1);
      dfs(i - 1, j);
      dfs(i,j - 1);
      dfs(i - 1,j - 1);
      dfs(i - 1,j + 1);
      dfs(i + 1,j - 1);
      dfs(i + 1,j + 1);
    }
  }
  for(let i: number = 0; i < land.length; i++){
    for(let j: number = 0; j < land[0].length; j++){
      if(land[i][j] == 0){
        count = 0;
        dfs(i,j);
        if(count){
          res.push(count);
        }
      }
    }
  }
  return res.sort((a, b)=> (a-b))
};
