//1.防抖：事件被触发后，n秒内函数只能执行一次
//如果在这n秒内又被触发，则重新计算执行时间
function debounce(fn,delay){
  let timer=null
  return function(){
    clearTimeout(timer)
    const timer=setTimeout(()=>{
      fn.call(this)
    },delay)
  }
}

//使用示例
const fn=debounce(function(){
  //函数体
},250)

window.addEventListener('mousemove',fn)