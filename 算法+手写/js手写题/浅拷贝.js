//手写实现浅拷贝
function shallowCopy(object){
//只拷贝对象
if(!Object||typeof object !=="object")return
//根据object的类型判断是新建一个数组还是对象
let newObject=Array.isArray(object)?[]:{};

//遍历object,并且判断是object的属性才拷贝
for(let key in object){
  if()
}
}

// const original = {a:1,b:{c:3}};
// const copied=shallowCopy(original)
// console.log(copied);


//使用扩展运算符
let obj1={a:1,b:{c:1}}
let obj2={...obj1}
obj1.a=2
console.log(obj1);//{ a: 2, b: { c: 1 } }
console.log(obj2);//{ a: 1, b: { c: 1 } }
obj1.b.c=2
console.log(obj1);//{ a: 2, b: { c: 2 } }
console.log(obj2);//{ a: 1, b: { c: 2 } }






