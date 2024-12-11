/**
 * 需求：
 * 改写函数sum实现：参数传递到5个即可实现累加
 * sum(1)(2)(3)(4)(5)
 * sum(1)(2,3)(4)(5)
 * sum(1)(2,3)(4,5)
 */

/**
 * 1.保存不定长参数
 * 2.判断参数个数
 * 3.长度没到5，则返回函数接收剩余参数
 */

let arr=[]
function sum(...args){
  arr.push(...args)
  //判断参数个数
  if(arr.length>=5){
    //长度到5 累加
    const res=arr.slice(0,5).reduce((p,v)=>p+v,0)
    //注意:累加之后需要清空数组，保证下次累加的值是正确的
    arr=[]
    return res
  }else{
    //长度没到5，返回函数接收剩余参数
    return sum 
  }
}