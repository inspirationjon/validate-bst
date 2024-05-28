// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;

  if (tree.value < minValue || tree.value >= maxValue) return false;

  const isLeftValid = validateBstHelper(tree.left, minValue, tree.value);
  const isRightValid = validateBstHelper(tree.right, tree.value, maxValue);

  return isLeftValid && isRightValid;
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
