//创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(22222);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333);
  }, 3000);
});


//返回一个数组，数组里面是对象key,value
Promise.allSettled([p1,p2,p3]).then(res=>{
  console.log(res);
  
})