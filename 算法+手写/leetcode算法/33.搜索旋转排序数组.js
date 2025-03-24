
var search=function(nums,target){
  let end = nums[nums.length - 1];
  //x在target右边的情况
  function check(i){
    const x=nums[i]
    if(x>end){
      return x>=target&&target>end
    }else{
      return x>=target||target>end
    }
  }
  let left=-1,right=nums.length-1
  while(left+1<right){
    const mid=Math.floor((left+right)/2)
    if(check(mid)){
      right=mid
    }else{
      left=mid
    }
  }
  return nums[right] === target ? right : -1;
}