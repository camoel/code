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
 * @return {number[][]}
 */

function levelOrder(root){
  if(!root){
    return []
  }
  let res=[]
  let cur=[root]
  while(cur.length){
    let val=[]
    let next=[]
    for(const node of cur){
      val.push(node.val)
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    cur=next
    res.push(val)
  }
  return res
}