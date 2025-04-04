function fetchData(url) {
    // 模拟异步请求
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, Math.random() * 1000);
    });
}

// 实现 batchRequest 函数
function batchRequest(urls, maxConcurrent, callback) {
    // 请在这里实现代码
    let result=new Array(urls.length).fill(null)
    let completedCount=0
    let currentIndex=0
    
    const sendRequest=()=>{
        if(completedCount===url.length){
            callback(result)
            return
        }
        while(currentIndex<urls.length&&maxConcurrent>0){
            const url=urls[currentIndex]
            maxConcurrent--
            currentIndex++
            fetchData(url).then((data)=>{
                result[url.indexOf(url)]=data
                completedCount++
                maxConcurrent++
                sendRequest()
            })
        }
    }
    sendRequest()
}

// 测试用例
const urls = ['url1', 'url2', 'url3', 'url4', 'url5'];
batchRequest(urls, 2, (results) => {
    console.log('All data:', results);
});