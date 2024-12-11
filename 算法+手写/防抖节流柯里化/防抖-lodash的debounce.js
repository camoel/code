//搜索框+lodash
/**
 * _.debounce(func,[wait=0],[option])
 * 1.参数1：需要防抖优化的原函数
 * 2.参数2：防抖的延迟事件，单位是毫秒
 * 3.参数3：选项对象（了解即可）
 * 4.返回值：防抖优化之后的新函数
 */
function renderCity(){

}
const func=function(){
  renderCity(this.value)
}

const debounceFn=_.debounce(func,500)

document.querySelector('.search-city').addEventListener('input',debounceFn)