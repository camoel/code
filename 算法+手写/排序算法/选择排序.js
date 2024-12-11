function selectionSort(arr){
  let minIndex
  for(let i=0;i<arr.length-1;i++){
    minIndex=i//用来存索引，因为后面可能还有变化
    for(let j=i;j<arr.length-1;j++){
      //此处循环从i处开始，因为前面都排好了较小的数
      if(arr[minIndex]>arr[j]){
        minIndex=j
      }
    }
    if(i!==minIndex){
      //只有在当前基准值不是最小值的时候才需要交换
      swap(arr,i,minIndex)
     }
   }
   function swap(array, a, b) {
     const temp = array[a];
     array[a] = array[b];
     array[b] = temp;
   }
   return arr
  }
  

const arr=[1,4,3,2,5,8]
console.log(selectionSort(arr))