/**
 * 静态属性
 *  定义时：static开头
 *  访问时：通过类来访问
 * 私有属性：
 *  定义时：#开头
 *  使用时：#开头，和定义的名字相同，只能在类的内部使用
 */

class Test{
  //静态属性和方法
  static stInfo='我是静态属性'
  static stMethod(){
    console.log('我是静态方法')
  }

  //私有属性和方法
  #prInfo='我是私有属性'
  #prMethod(){
    console.log('我是私有方法');
  }

  testPr(){
    console.log(this.#prInfo)
    this.#prMethod()
  }
}

//访问静态属性和方法
Test.stMethod()
console.log(Test.stInfo);

const t =new Test()
t.testPr()

//类的外部，无法直接访问私有属性/方法
//注意：Chrome的控制台中，可以直接访问私有属性和方法（便于调试）
