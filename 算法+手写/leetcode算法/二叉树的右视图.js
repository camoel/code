/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function rightSideView(root){
  let res=[]
  function dfs(node,depth){
    if(node===null)return
    if(depth===res.length){
      res.push(node.val)
    }
    //如果是左视图的话就交换递归左右子树的顺序，先递归左子树
    dfs(node.right,depth+1)
    dfs(node.left,depth+1)

  }
  dfs(root,0)
  return res
}

const ans = rightSideView([1, 2, 3, null, 5, null, 4]);
console.log('ans',ans)