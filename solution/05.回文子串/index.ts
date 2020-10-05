function longestPalindrome(s: string): string {
  const length: number = s.length;
  let max: number = 1;
  let ans: string = '';
  let dp: any[] = new Array(length);
  for(let i: number = 0; i < length; i++){
    dp[i] = new Array(length);
    for(let j: number = 0; j < length; j++){
      dp[i][j] = false
    }
  }
  for(let l: number = 1; l <= length; l++){
    for(let i: number = 0; i < length - l + 1; i++){
      let j: number = i + l - 1;
      if(l == 1){
        dp[i][j] = true;
      }
      else if(l == 2){
        dp[i][j] = (s.charAt(i) == s.charAt(j));
      }  
      else{
        dp[i][j] = (dp[i+1][j-1] && s.charAt(i) == s.charAt(j));
      }
      if(dp[i][j] && l >= max){
        max = l;
        ans = s.substring(i,j+1);
      }
    }
  }
  return ans;
};

let s = "a";
console.log(longestPalindrome(s));
