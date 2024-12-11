/**
 * 存在则返回元素所在下标，不存在则返回-1
 */

Array.prototype.indexOf=(item)=>{
  let array=this
  for(let i=0;i<array.length;i++){
    if(array[i]===item)
      return i
  }
  return -1
}