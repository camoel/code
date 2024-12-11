/**
 * resolve(参数)
 * 1.普通的值或者对象 pending->fulfilled
 * 2.传入一个Promise
 * 那么当前的Promise的状态会由传入的Promise来决定
 * 3.传入一个对象，并且这个对象有实现then方法（并且这个对象是实现了thenable)
 * 那么也会执行该then方法，并且由该方法决定后续状态
 */


const promise=new Promise((resolve,reject)=>{

})

new Promise((resolve,reject)=>{
  resolve(new Promise)
}).then(res=>{
  console.log("res",res);
  
}),err=>{
  console.log("err",err);
  
}

