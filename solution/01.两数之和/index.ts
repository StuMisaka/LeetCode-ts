//for循环嵌套
function twoSum(nums: number[], target: number): number[] {
  for(let i: number = 0; i < nums.length; i++){
    for(let j: number = i + 1; j <nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }
  return [0,0]
};

//哈希表
function twoSum2(nums: number[], target: number): number[]{
  let map: any = {};
  for(let i: number = 0; i < nums.length; i++){
    map[nums[i]] = i;
  }
  for(let j: number = 0; j < nums.length; j++){
    const x = target - nums[j];
    if(x in map && map[x] != j){
      return [j,map[x]]
    }
  }
  return [0,0]
}

//哈希表
function twoSum3(nums: number[], target: number): number[]{
  let map: any = {};
  const length = nums.length
  for(let i: number = 0; i < length; i++){
    const x = target - nums[i];
    if(x in map && map[x] != i){
      return [map[x],i]
    }
    else{
      map[nums[i]] = i;
    }
  }
  return [0,0]
}