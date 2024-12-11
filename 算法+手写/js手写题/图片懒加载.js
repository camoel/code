/* function loadImage(url){
  return new Promise((resolve,reject)=>{
    const img=new Image()
    img.onload=()=>resolve(img)
    img.onerror=()=>{
      const backupUrl='backupImageUrl.jpg'
      loadImage(backupUrl).then(resolve).catch(reject)
    }
    img.src=url
  })
}

//使用示例
loadImage('originalImageUrl.jgp').then((img)=>{
  document.body.appendChild(img)
}).catch((error)=>{
  console.log('图片加载失败',error);
})
 */

const img = ["./src/img.jpg", "./src/imgs.jpg", "./src/imgs.jpg"];
function loader(url){
  return new Promise((resolve,reject)=>{
    const image=new Image()
    image.onload=()=>{
      resolve()
    }
    image.onerror=()=>{
      reject()
    }
    img.src=url
  })
}

//预加载函数
const preLoad=()=>{
  const preLoadArray=[]
  img.forEach((url)=>{
    preLoadArray.push(loader(url))
  })
  return Promise.allSettled(preLoadArray)
}