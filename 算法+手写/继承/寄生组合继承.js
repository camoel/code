//父类
function Person(name){
this.name=name
}
Person.prototype.sayHi=function(){
  console.log('你好，我叫${this.name}')
}

//------------寄生组合式继承 核心代码----------
//组合式继承：借用构造函数，原型链
//寄生：父类的原型中，有子类的构造函数
//通过构造函数继承属性
function Student(name){
  //这个this即实例对象Student
  Person.call(this,name)
}

//通过原型链继承方法
const prototype=Object.create(Person.prototype,{
  constructor:{
    value:Student
  }
})

//创建的原型，赋值给子类的原型
Student.prototype=prototype

//-----------Object.create测试-----------
const food={
  name:'西兰花炒蛋',
  eat(){
console.log('好好吃')
  }
}

//Object.create静态方法
//将一个对象作为原型，创建一个新的对象
//参数1：源对象
//参数2：可以用来覆盖源对象中的特定属性/方法
const Food=Object.create(food,{
  eat:{
    value(){
      console.log('真的好好吃哦！');
    }
  }
  
})