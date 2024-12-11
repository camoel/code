//函数柯里化-实际应用
//参数复用：为函数预制通用参数，供多次重复调用
function isUndefined(thing){
  return typeof thing==='undefined'
}
function isNumber(thing){
  return typeof thing==='number'
}
function isString(thing){
  return typeof thing==='string'
}
function isFunction(thing){
  return typeof thing==='function'
}

//---------核心代码-----------
//改为通过typeOfTest生成
//2.动态传入判断的类型
//复用 类型判断函数的逻辑
const typeOfTest=function(type){
  function isUndefined(thing){
    return typeof thing===type
  }
  return isUndefined
}

//简写如下 axios源码也是如此使用的
const _typeOfTest=type=>thing=>typeof thing===type

//typeOfTest动态生成类型判断函数，需要用哪个，动态生成即可
const isString=typeOfTest('string')
const isUndefined=typeOfTest('undefined')