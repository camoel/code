//1.使用Set,Set是js中的一个内建的对象，他只允许存储唯一的值，因此可以用来去重
//Array.from(),将两类对象转为真正的数组：类似数组的对象和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
//还可以接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组
function uniqueArray(arr){
  return Array.from(new Set(arr));
  //return [...new Set (arr)]
}

const array=[1,2,3,4,4,3,2,1]
const unique= uniqueArray(array)
console.log(unique)


//2.使用filter
function uniqueArray1(arr){
  return arr.filter((item,index)=>arr.indexOf(item)===index)
}
const array1 = [1, 2, 3, 4, 4, 3, 2, 1];
const unique1=uniqueArray1(array1)
console.log(unique1)

//3.使用reduce