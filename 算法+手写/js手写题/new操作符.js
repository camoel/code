function myNew(func,...args){
  let obj={}
  obj.__proto__=func.prototype
  const result=func.apply(obj,args)
  return result instanceof Object?result:obj
}

//使用示例
function Person(name,age){
  this.name=name
  this.age=age
}
Person.prototype.say=function(){
  console.log(this.name)
}
let p =myNew(Person,'张三',30)
console.log(p.name)
console.log(p.age)

