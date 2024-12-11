/* 
1.初始化i = -1
2.循环数组，找到比支点小的数就将i向右移动一个位置，同时与下标i交换位置
3.循环结束后，最后将支点与i+1位置的元素进行交换位置
4.最后我们会得到一个由i指针作为分界点，分割成从下标0-i，和 i+1到最后一个元素。 
*/

//先写最简单的数组交换;
function swap(arr,i,j){
  const temp=arr[i]
  arr[i]=arr[j]
  arr[j]=temp
}
//拆分,对指针进行移动，找到最后指针所指向的位置
/**
 * @param{*}arr 数组
 * @param{*}p 起始下标
 * @param{*}r 结束下标+1（数组长度）
 */
function divide(arr,p,r){
//基准点
const pivot=arr[r-1]
//初始化i为1，也就是起始下标的前一个
let i=p-1
//循环
for(let j=p;j<r-1;j++){
  //如果比基准点小就i++,然后交换元素位置
  if(arr[j]<=pivot){
    i++
    swap(arr,i,j)
  }
}
swap(arr,i+1,r-1)
}

/**
 * @param{*}arr 数组
 * @param{*}p 起始下标
 * @param{*}r 结束下标+1
 */
function quickSort(arr,p=0,r){
  r=r||arr.length
  if(p<r-1){
    const q=divide(arr,p,r)
    quickSort(arr,p,q)
    quickSort(arr, q + 1, r);
  }
  return arr
}

const arr=[4,5,6,3,2,1,0]
console.log(quickSort(arr))