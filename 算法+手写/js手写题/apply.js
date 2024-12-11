
const obj={
  age:18
}

function fn(x,y){
  console.log(x+y)
}

//apply（）用于
//1.立即调用函数
//2.改变this指向
//3.返回值，本身就是在调用函数，所以返回值及时函数的返回值

fn.apply(obj,[1,2])

//使用场景:求数组最大值
// const max=Math.max.apply(Math,[1,2,3])
// console.log(max)

const arr=[10,20,350]
const max = Math.max.apply(Math, arr);
const min = Math.min.apply(Math, arr);
console.log(min,max)

//使用展开运算符求数组最大值
console.log(Math.max(...arr));
