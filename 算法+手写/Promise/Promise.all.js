/*
静态方法-all
1.返回Promise实例
2.判断是否为数组，错误信息：Argument is not iterable
3.空数组直接兑现
4.处理全部兑现
  4.1记录结果：索引来记录，保证结果的顺序和Promise数组的顺序一致
  4.2判断全部兑现：通过兑现的次数进行判断，保证可以获取到所有结果
5.处理第一个拒绝
*/

function PromiseAll(promises){
  // 1.返回Promise实例
  return new Promise((resolve,reject)=>{
    //2.判断是否为数组
    if (!Array.isArray(promises)) {
      throw new TypeError("Argument is not iterable");
    }
    //3.空数组直接兑现
    promises.length === 0 && resolve(promises);

    //4.1记录结果
    const result=[]
    let count=0
    promises.forEach((p,index)=>{
      Promise.resolve(p).then(res=>{
        result[index]=res
        // 4.2判断全部兑现
        count++
        count===promises.length&&resolve(result)
      },err=>{
        //5.处理第一个拒绝
        return reject(err);
      })
    })
  })
}

//test
const p1=Promise.resolve(1)
const p2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(2)
    // reject('error')
  },1000)
})
const p3=3

PromiseAll([p1,p2,p3]).then(res=>{
  console.log(res);
  
})

