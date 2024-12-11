//创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1111);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(22222);
  }, 4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333);
  }, 3000);
});

//any方法等到一个fulfilled状态才会结束
//并且在遇到resolve之前碰到reject不会执行
//如果全是reject则会返回Error:all rejected错误
Promise.any([p1,p2,p3]).then(res=>{
  console.log("res:",res);
  
}).catch(err=>{
  console.log("err:",err.errors);
  
})