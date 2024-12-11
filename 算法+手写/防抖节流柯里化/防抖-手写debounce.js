//自己实现 debounce
/**
 * 1.返回防抖动的新函数(必须是匿名函数，箭头函数的this一出生就已经被指定，而此处需要处理this1)
 * 2.原函数中的this可以正常使用
 * 3.原函数中的参数可以正常使用
 */

const func=function(e){
  console.log('e',e)
  renderCity(this.value)
}

//timeId在匿名函数外部声明是为了防止多次触发定时器产生多个变量
//timeId不会被回收，因为匿名函数访问了timeId，形成了闭包
//传入的参数用剩余参数表示，并且打印它是一个数组，所以可以使用apply方法
// func.apply(_this,args)这是延迟执行的函数
function debounce(func,wait){
  let timeId
  return function(...args){
    const _this=this
    clearTimeout(timeId)
    timeId=setTimeout(function(){
      func.apply(_this,args)
    },wait)
  }
}