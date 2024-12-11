function myInstanceof(left,right){
  //获取left的原型
 let proto=Object.getPrototypeOf(left)
 //获取right的prototype属性
 prototype=right.prototype
 //循环判断left的原型是否等于prototype
 while(true){
  
  if(!proto)return false
  if(proto===prototype)
    return true
  proto=Object.getPrototypeOf(proto)
 }
}

// 示例用法
function Person() {}
const person = new Person();

console.log(myInstanceof(person, Person));