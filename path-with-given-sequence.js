class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_path = function(root, sequence) {
  // TODO: Write your code here
  let size = sequence.length;
  let ans = false;
  helper(root, 0);
  console.log(ans);
  return ans;

  function helper(curNode, curIndex) {
    if (!curNode) return;
    if (curNode.value !== sequence[curIndex]) {
      return;
    } else {
      if (curIndex === size - 1 && !curNode.left && !curNode.right) {
        ans = true;
      } else if (curIndex < size - 1) {
        helper(curNode.left, curIndex + 1);
        helper(curNode.right, curIndex + 1);
      }
    }
    curIndex -= 1;
  }
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 0, 1])}`);
