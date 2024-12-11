/**
 * 手写call方法
 * 1.定义myCall方法
 * 2.设置this并调用原函数
 * 3.接收剩余参数并返回结果
 * 4.使用symbol调优
 */

//定义myCall方法
Function.prototype.myCall=function (thisArg,...args){
  //设置this并调用原函数
  //给thisArg加一个一定和原属性不重名的新属性（方法）
  //使用symbol调优，symbol创建一个唯一的变量
  const key=Symbol('key')
  //this:原函数（原函数.myCall）
  thisArg[key]=this
  const res=thisArg[key](...args)//调用对象的属性（这个属性是一个函数）
  delete thisArg[key]
  return res
}

//--------------------测试代码--------------------
const food={
  name:'西兰花炒蛋'
}
function func2(numA,numB,numC){
  console.log(this);
  console.log(numA, numB, numC);
  return numA+numB+numC
}
const res2=func2.myCall(food,2,4,5)
console.log("res:",res2);
