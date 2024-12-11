// const promise=new Promise((resolve,reject)=>{
//   // resolve()
//   reject("reject status")
//   // throw new Error("reject status")
// })


//1.当executor抛出异常时，也是会调用错误捕获的回调函数的
// promise.then(undefined,(err)=>{
//   console.log("err",err);
//   console.log("--------");
// })

//2.通过catch方法来传入错误（拒绝）捕获回调函数
// promise.catch(err=>{
//   console.log("err",err);
// })

//catch优先捕获promise的异常，如果promise无异常，
// 而then的返回值Promise里有异常，那么可以向下捕获
const promise = new Promise((resolve, reject) => {
  resolve()
  // reject("reject status");
  // throw new Error("reject status")
});

promise.then(res=>{

}).then(res=>{
  throw new Error("then error message")
}).catch(err=>{
  console.log("err:",err);
})
