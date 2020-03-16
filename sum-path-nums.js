class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_sum_of_path_numbers = function(root) {
  // TODO: Write your code here
  let ans = 0;

  if (!root) return null;
  helper(root, '');

  function helper(curNode, curVal) {
    if (!curNode) return;
    curVal = curVal + curNode.value.toString();
    if (!curNode.left && !curNode.right) {
      console.log(parseInt(curVal));
      ans += parseInt(curVal);
    } else {
      helper(curNode.left, curVal);
      helper(curNode.right, curVal);
    }

    curVal = curVal.slice(0, -1);
  }

  return ans;
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
