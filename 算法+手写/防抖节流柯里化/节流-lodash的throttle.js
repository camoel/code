//使用节流优化
/**
 * lodash的throttle方法 _.throttle(func,[wait=0],[options=])
 *  func:需要进行节流优化的原函数
 *  wait:节流的毫秒数
 *  options:
 *    options.leading:节流开始时是否触发函数，默认为true
 *  返回值：节流优化后的新函数
 */

const func=function(){
  console.log('timeupdate触发');
  console.log('e',e);
  localStorage.setItem('currentTime',this.currentTime)
}

const throttleFn=_.throttle(func,1000,{leading:false})
