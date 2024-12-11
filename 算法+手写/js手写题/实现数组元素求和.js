//方法一：使用for循环
/* 
function samArray(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]
  }
  return sum
}
let arr=[1,2,3,4,5]
console.log(samArray(arr));//输出15 
*/


//使用Array.prototype.reduce()方法
function sumArray(arr){
  return arr.reduce((pre,cur)=>pre+cur,0)
}
let arr=[1,2,3,4,5]
console.log(sumArray(arr));//输出15
