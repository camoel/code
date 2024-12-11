//类方法Promise.resolve
//1.普通的值

// const promise=Promise.resolve({name:"why"})
//相当于
// const promise2=new Promise((resolve,reject)=>{
//   resolve({name:"why"})
// })

//2.传入Promise
const promise1=Promise.resolve(new Promise((resolve,reject)=>{
  resolve("11111")
}))
promise1.then(res=>{
  console.log("res:",res);
  
})

//3.传入thenable对象