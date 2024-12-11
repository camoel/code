
const obj={
  uname:'张三',
  age:18,
  hobby:['乒乓球','足球'],
  family:{
    baby:'小明'
  }
}

//利用JSON.stringify()和JSON.parse()实现深拷贝
const object1=JSON.parse(JSON.stringify(obj))
console.log(object1);
object1.family.baby='小红'
console.log(obj);



//利用递归实现深拷贝
const o={}
//拷贝函数
function deepCopy(newObj,oldObj){
  //k 索引号 oldObj[k] 乒乓球 足球
  for(let k in oldObj){
    //处理数组的问题
    if(oldObj[k] instanceof Array){
      newObj[k]=[]
      //newObj[k] 接收 []
      //oldObj[k] ['乒乓球','足球']
      deepCopy(newObj[k],oldObj[k])
    }else if(oldObj[k] instanceof Object){
      newObj[k]=[]
      deepCopy(newObj[k],oldObj[k])
    }
    else{
      //k 是属性名，oldObj[k]是属性值 18
      //newObj[k]===o.uname 给新对象添加属性
      newObj[k]=oldObj[k]
    }
  }
}
deepCopy(o,obj)//函数调用，两个参数：o和obj旧对象
console.log(o);


//使用lodash 实现深拷贝(_.cloneDeep)
//需要在标签中引入lodash.min.js或者npm下载

const object=_.cloneDeep(obj)
console.log(object)

