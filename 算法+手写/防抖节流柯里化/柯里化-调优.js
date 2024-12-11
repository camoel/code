
/**------------需求------------- */
//基于上一节代码，实现函数sumMaker:参数个数可以自定义
function sumMaker(length) {
  let num=[]
  function sum(...args){
    num.push(...args)
    if(num.length>=length){
      const res=num.slice(0,length).reduce((p,v)=>p+v,0)
      num=[]
      return res
    }else{
      return sum
    }
  }
  //sum返回到外面，外面才能调用
  return sum
}



const sum6=sumMaker(6)
sum6(1,2,3)(4,5,6)
const sum4=sumMaker(4)
sum6(1,2)(3,4)