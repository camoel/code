/**
 * 手写apply方法
 * 1.定义myApply方法
 * 2.设置this并调用原函数
 * 接收参数并返回结果
 */
Function.prototype.myApply=function (thisArg,args){//传入的是参数数组，不需要...
  const key=Symbol('key')
  thisArg[key]=this
  const res=thisArg[key](...args)//传入的参数数组，在调用的时候用展开运算符展开
  delete thisArg[key]
  return res
}





//----------------调试代码---------------
const person={
  name:'芹菜西兰花'
}

function func(numA,numB){
  console.log(this);
  console.log(numA+numB);
  return numA+numB
}

const res=func.myApply(person,[2,8])
console.log('返回值为：',res)
  