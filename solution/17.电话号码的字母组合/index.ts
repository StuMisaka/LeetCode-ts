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
