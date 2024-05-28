// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// time - O(n), because we are validating everthing once
// space - O(h), memory used each time recursive is on

function validateBst(tree) {
  // Passing min, max values
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  // Meaning tree fully validated
  if (tree === null) return true;

  // Not BST, value is not btw the range
  if (tree.value < minValue || tree.value >= maxValue) return false;

  // Check left and right
  const isLeftValid = validateBstHelper(tree.left, minValue, tree.value);
  const isRightValid = validateBstHelper(tree.right, tree.value, maxValue);

  // Return result based on the validations
  return isLeftValid && isRightValid;
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
