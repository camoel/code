/**
 * 
 * @param {number[]} arr 
 * @returns 
 */
function insertSort(arr){
  let temp //记录当前这一轮索引对应的元素值
  for(let i=1;i<arr.length;i++){
    temp=arr[i]
    //内层的循环时从当前i到0的遍历
    //循环条件终止是当i=0或者找到第一个比当前值小的，在它的后面插入
    //从第i-1个开始逐个向前比对，如果不满足则向右移动一格
    //直到满足条件插入到递减后i的位置
    while(i>0&&arr[i-1]>temp){
      arr[i]=arr[i-1]
      i--
    }
    arr[i] = temp;
  }
  return arr
}
const arr=[5,4,3,2,1]
console.log(insertSort(arr));