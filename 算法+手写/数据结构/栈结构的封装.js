//push 添加一个元素到栈顶
//pop 出栈
//peek 返回栈顶
//isEmpty
//clear()
//size()
//toString 

class Stack{
  // constructor(){
  //   this.items=[]
  // }
  //#私有属性
  #items=[]

  pop(data){
  return this.#items.push(data)
  }

  push(){
  return this.#items.pop(data)
  }

  peek(){
  //return this.#items[this.#items.length-1]
  return this.#items.at(-1)
  //-1就是找最后一个元素，-2就是找倒数第二个元素
  }

  isEmpty(){
    return this.#items.length
  }
  size(){
    this.#items=[]
  }
  toString(){
    this.#items.join(" ")
  }
}

let stack=new Stack()