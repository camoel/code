function countingSort(arr) {
 if(arr.length<2){
  return arr
 }
 const maxValue=findMax(arr)
 const counts=new Array(maxValue+1)
 arr.forEach(item=>{
  if(!counts[item]){
    counts[item]=0
  }
  counts[item]++
 })
 let newArr=[]
 let sortIndex=0
 counts.forEach((item,index)=>{
  while(item>0){
    newArr[sortIndex++]=index
    item--
  }
 })
 return newArr
}
//找最大值函数
function findMax(arr){
let max=arr[0]
for(let i=0;i<arr.length;i++){
  if(arr[i]>max){
    max=arr[i]
  }
}
return max
}

const arr=[6,5,4,3,2]
console.log(countingSort(arr))//[ 2, 3, 4, 5, 6 ]