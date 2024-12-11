//题目描述：求数组中的第K个最大元素
/**
 * 我把数组全部排序好，这样就可以拿到第k大的元素，这样是一种解法，
 * 但是我们是需要第K大的元素，不一定要全部排序好再去拿，只针对部分元素进行排序，这样的复杂度显然可以降低的
也就是可以转化为：使用堆排序来解决这个问题——建立一个大顶堆，
做k−1 次删除操作后,堆顶元素就是我们要找的答案
（堆排序过程中，不全部下沉，下沉nums.length-k+1,然后堆顶可以拿到我们top k答案了）
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//整个流程是上浮下沉
var findKthLargest=function(nums,k){
  let heapSize=nums.length
  buildMaxHeap(nums,heapSize)//构建好了一个大顶堆
  //进行下沉，大顶堆是最大元素下沉到末尾
  for(let i=nums.length-1;i>=nums.length-k+1;i--){
    swap(nums,0,i)
    --heapSize//下沉后的元素不参与到大顶堆的调整
    //重新调整大顶堆
    maxHeapify(nums,0,heapSize)
    }
   return nums[0];
  //自下而上构建一颗大顶堆
  function buildMaxHeap(nums,heapSize){
  for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
    maxHeapify(nums,i,heapSize)
    }
  }
  //从左向右，自上而下的调整节点
  function maxHeapify(nums,i,heapSize){
    let l=i*2+1
    let r=i*2+1
    let largest=i
    if(l<heapSize&&nums[l]>nums[largest]){
      largest=l
    }
    if(r<heapSize&&nums[r]>nums[largest]){
    largest=r
    }
  if(largest!==i){
    swap(nums,i,largest)//进行节点调整
    //继续调整下面的非叶子节点
    maxHeapify(nums,largest,heapSize)
    }
  }

//定义交换方法,交换数组a中的i，j
function swap(a,i,j){
  let temp=a[i]
  a[i]=a[j]
  a[j]=temp
  }
}

console.log(findKthLargest([1,3,5,6,8,34,56,76],5))