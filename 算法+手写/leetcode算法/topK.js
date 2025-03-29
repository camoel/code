var findKthLargest = function (nums, k) {
  let size = nums.length;
  build(nums, size);
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    swap(nums, 0, i);
    --size;
    heapify(nums, 0, size);
  }
  return nums[0];

  function build(nums, size) {
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
      heapify(nums, i, size);
    }
  }

  function heapify(nums, i, size) {
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    let largest = i;
    if (l < size && nums[l] > nums[largest]) {
      largest = l;
    }
    if (r < size && nums[r] > nums[largest]) {
      largest = r;
    }
    if (largest !== i) {
      swap(nums, i, largest);
      heapify(nums, largest, size);
    }
  }

  function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findKthLargest(arr, 3));
//build构建最大堆,进行k-1次交换（--len）和调整，返回堆顶nums[0]，
//构建堆：最后一个非叶子节点开始调整，
// （获取左右子节点索引，判断大小，如果largest!==i,则交换并调整）
//注意建堆传入nums,size，堆化传入nums,当前顶部,size