//方法一：使用递归
/* function flattenArray(arr){
  let result=[];
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result=result.concat(flattenArray(arr[i]));
    }else{
      result.push(arr[i]);
    }
  }
  return result;
}

let arr = [1, [2, [3, [4]], 5]];
console.log(flattenArray(arr));//输出[1,2,3,4,5]
 */

// const { rest } = require("lodash");

//方法二：使用reduce
// function flattenArray(arr){
//   return arr.reduce((acc,val)=>
//     Array.isArray(val)?[...acc,...flattenArray(val)]:[...acc,val],[]);
// }
// let arr = [1, [2, [3, [4]], 5]];
// console.log(flattenArray(arr));//输出[1,2,3,4,5]

//方法三：使用flat
let arr = [1, [2, [3, [4]], 5]];
console.log(arr.flat(Infinity)); //输出[1,2,3,4,5]);

/* function flatten(arr){
  let result=[]
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result=result.concat(flatten(arr[i]))
    }
    result.push(arr[i])
  }
  return result
} */

//使用while循环
function flatten(arr) {
  let result = [];
  while (arr.length) {
    let [first, ...rest] = arr;
    if (Array.isArray(first)) {
      arr = [...first, ...rest];
    } else {
      result.push(first);
      arr = [...rest];
    }
  }
  return result;
}

// 加个map或者讲栈存的元素换成key:dept的形式都可以
/* function flat2(array, depth = 1) {
  let deptMap = new Map();
  let queue = [...array];
  array.forEach((item) => {
    deptMap.set(item, depth);
  });
  let res = [];
  while (queue.length) {
    let item = queue.shift();
    if (Array.isArray(item) && deptMap.get(item) > 0) {
      item.forEach((i) => {
        deptMap.set(i, deptMap.get(item) - 1);
        queue.push(i);
      });
    } else {
      res.push(item);
    }
  }
  return res;
}
 */

function flatten(arr,depth=1){
  const stack=arr.map(item=>({item}))
}
