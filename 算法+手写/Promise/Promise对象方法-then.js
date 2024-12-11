//2.then方法传入的回调函数可以有返回值
//then方法本身也是有返回值的，它的返回值是Promise
//如果返回的是一个普通值/undefined，那么这个普通的值被作为一个新的Promise的resolve值
promise
  .then((res) => {
    return "aaaaaa";
  })
  .then((res) => {
    return "bbbbbb";
  })
  .then((res) => {
    console.log("res", res);
  });

//3.如果返回的是一个对象，并且该对象实现了thenable
promise
  .then((res) => {
    return {
      then: function (resolve, reject) {
        resolve(22222);
      },
    };
  })
  .then((res) => {
    console.log("res", res);
  });
