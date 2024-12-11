const arr=[11,2,4,3,6,87]
/**
 * @param{number[]}arr
 */
function quickSort(arr){
if(arr.length<2){
  return arr
}
  const middleIndex=Math.floor(arr.length/2)
  const middle=arr[middleIndex]
  const lower=[]
  const higher=[]
  for(let i=0;i<arr.length;i++){
    //排除当前基准值
    if(i===middleIndex){
      continue
    }
    if(arr[i]<middle){
      lower.push(arr[i])
    }else{
      higher.push(arr[i])
    }
  }
  return [...quickSort(lower),middle,...quickSort(higher)]
}

console.log(quickSort(arr));
/* function quickSort(arr){
  if(arr.length<2){return arr }
  let goal=arr[0]
  let minArr = arr.slice(1).filter((item) => item <= goal);
  let maxArr = arr.slice(1).filter((item) => item > goal);
  return quickSort(minArr).concat([goal]).concat(quickSort(maxArr))
} */

