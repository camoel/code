const { delay } = require("lodash")
//防抖
function debounce(fn,delay){
  let timeId
  return function(...args){
    let _this=this
    clearTimeout(timeId)
    const timeId=setTimeout(function(){
      fn.apply(_this,args)
    },delay)
  }
}
//节流
function throttle(fn,delay){
  let timeId
  return function(...args){
     if (timeId != undefined) {
       return;
     }
     let _this = this;
    timeId = setTimeout(function () {
      fn.apply(_this,args)
      timeId = undefined;
    }, delay);
  }
}

//发布-订阅
class Observer{
  constructor(){
    this.message={}
  }

  $on(type,callback){
    if(!this.message[type]){
      this.message[type]=[]
    }
    this.message[type].push(callback)
  }
  $off(type,callback){
    if(!this.message[type])return
    this.message[type] = this.message[type].filter(item=>item!=callback)
  }
  $on(type,...args){
     if (!this.message[type]) return;
     this.message[type].forEach(item=>{
      item(...args)
     })
  }
}

//深拷贝
const o={}
function deepClone(old,newObj){
  for(let k of old){
    if(old[k] instanceof Array ){
      newObj=[]
      deepClone(old[k],newObj[k])
    }else if(old[k] instanceof Object){
       newObj = [];
       deepClone(old[k], newObj[k]);
    }else{
      newObj[k]=old[k]
    }
  }
}

//手写instanceof
function myInstanceOf(left,right){
  let proto=Object.getPrototypeOf(left)
  prototype=right.prototype
  if(!proto)return false
  if(proto===prototype)return true
    proto=Object.getPrototypeOf(proto)
}

//数组扁平化
// function flatten(arr){
//   let result=[]
//   for(let i=0;i<arr.length;i++){
//     //如果子元素是数组
//     if(Array.isArray(arr[i])){
//       //将子元素扁平后加入到结果数组里面
//       result=result.concat(flatten(arr[i]))
//     }else{
//       //不是就直接添加
//       result.push(arr[i])
//     }
//   }
//   return result
// }

//手写new
function myNew(func,...args){
  let Object={}
  Object.__proto__=func.prototype
  const result=func.call(this,...args)
  return result instanceof Object?res:Object
}

//call
Function.prototype.myCall(thisArg,...args){
  let key=Symbol('key')
  thisArg[key]=this
  const res=thisArg[key](...args)
  delete thisArg[key]
  return res
}

//apply
Function.prototype.Apply(thisArg,args){
  let key=Symbol('key')
  thisArg[key]=this
  const res=thisArg[key](...args)
  delete thisArg[key]
  return res
}

//bind
Function.prototype.bind(thisArg,...args){
  return function(...resArg){
    thisArg.call(thisArg,...args,...resArg)
  }
}

function flatten(arr){
  let result=[]
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result=result.concat(flatten(arr[i]))
    }
    result.push(arr[i])
  }
  return result
}

//驼峰转下划线
function change(arr){
  let res=''
  for(let i=0;i<arr.length;i++){
    const char=arr[i]
    if(char===char.toUpperCase()&&i!=0){
      res+='_'+char.toLowerCase
    }
    res+=char.toLowerCase()
  }
  return res
}

//下划线转驼峰
function anotherChange(arr){
  let strArr=arr.split('')
  for(let i=0;i<strArr.length;i++){
    if(strArr[i]==='_'){
      strArr.splice(i,1)
      strArr[i]=strArr[i].toUpperCase()
    }
  }
  return strArr.join('')
}

//归并排序
function mergeSort(arr){
  if(arr.length<2)return arr
  let middle=Math.floor(arr.length/2)
  let left=arr.slice(0,middle)
  let right=arr.slice(middle)
  return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
  let result=[]
  while(left.length&&right.length){
    if(left[0]<=right[o]){
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }
  return result.concat(left,right)
}

//选择排序
function selectSort(arr){
  if(arr.length<2)return arr
  let minIndex
  for(let i=0;i<arr.length;i++){
    minIndex=i
    for(let j=i;j<arr.length;j++){
      if(arr[minIndex]>arr[j]){
        minIndex=j
      }
    }
    if(minIndex!=i){
      swap(arr,i,minIndex)
    }
  }
}

//插入排序
function insertSort(arr){
  let temp
  for(let i=0;i<arr.length;i++){
    temp=arr[i]
    while(i>0&&arr[i-1]>temp){
      arr[i]=arr[i-1]
      i--
    }
    arr[i]=temp
  }
  return arr
}

//柯里化
function curry(fn){
  return function curried(...args){
    if(args.length>=fn.length){
      return fn.apply(this,args)
    }else{
      return function(...args2){
        return curried.apply(this,args.concat(args2))
      }
    }
  }
}

//数组扁平化
function flatten(arr){
  let res=[]
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      res=res.concat(flatten[arr[i]])
    }
    res.push(arr[i])
  }
  return res
}
