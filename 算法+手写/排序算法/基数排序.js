function radixSort(arr){
  const base=10
  let divider=1
  //Math.floor(x/divider)=10
  //divider*=base 
  let maxValue=Math.max(...arr)
  while(divider<=maxValue){
    //构建二维数组
    const buckets=[...Array(10).map(()=>[])]
    for(let val of arr){
      buckets[Math.floor(val/divider)%base].push(val)
    }
    arr=[].concat(...buckets)//新的arr是上一轮按某一位已经排序好了的
    divider*=base//累乘是为了从个位到百位到千位进行分类
  }
  return arr 
}
const arr=[35,2,26,2,5,8,34,1,56,99,33]
console.log(radixSort(arr))