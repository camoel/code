// 定义二叉树节点结构
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 返回所有从根到叶子的路径，使得路径和等于目标和
function pathSum(root, targetSum) {
  const result = []; // 用于存储所有满足条件的路径

  function dfs(node, currentPath, currentSum) {
    if (!node) return; // 如果当前节点为空，直接返回

    // 将当前节点加入路径，并更新当前路径和
    currentPath.push(node.val);
    currentSum += node.val;

    // 如果当前节点是叶子节点，并且路径和等于目标和
    if (!node.left && !node.right && currentSum === targetSum) {
      result.push([...currentPath]); // 将当前路径加入结果
    }

    // 递归检查左子树和右子树
    dfs(node.left, currentPath, currentSum);
    dfs(node.right, currentPath, currentSum);

    // 回溯：移除当前节点，恢复路径状态
    currentPath.pop();
  }

  // 从根节点开始进行深度优先搜索
  dfs(root, [], 0);

  return result;
}

// 示例用法
// 构建一个二叉树
//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

// 获取所有路径和为 22 的路径
console.log(pathSum(root, 22)); // 输出 [[5, 4, 11, 2]]
