function mergeSort(arr){
  //采用自上而下的递归方法
  if (arr.length < 2) {
    return arr;
  }
  // length >> 1 和 Math.floor(len / 2) 等价
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle); // 拆分为两个子数组
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left,right){
  let result=[]
  while(left.length&&right.length){
    // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
return result.concat(left,right)
}

const arr = [11, 2, 4, 3, 6, 87];
console.log(mergeSort(arr))//[ 2, 3, 4, 6, 11, 87 ]