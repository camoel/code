/**
 * throttle(func,[wait=0])
 * 1.返回节流的新函数
 * 2.原函数中this可以正常使用
 * 3.原函数中的参数可以正常使用
 */

function throttle(func,wait){
  let timeId
  return function(...args){
    if(timeId!==undefined){
      return
    }
    const _this=this
    timeId=setTimeout(function(){
      func(_this, args);
      //注意调用结束后要清空定时器
      timeId = undefined;
    },wait)
  }
}