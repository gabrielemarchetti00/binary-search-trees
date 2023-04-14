class Node {
    constructor(d) {
        this.data = d;
        this.right = null;
        this.left = null;
    }
}

class Tree {
    constructor(a) {
        this.array = a;
    }

    //root = buildTree();
}

function buildTree(arr, start, end) {
    /* Base Case */
    if (start > end)
    {
        return null;
    }
    /* Get the middle element and make it root */
    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);
    /* Recursively construct the left subtree and make it
        left child of root */
    node.left = buildTree(arr, start, mid - 1);
    /* Recursively construct the right subtree and make it
        right child of root */
    node.right = buildTree(arr, mid + 1, end);
    return node;
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
arr = [...new Set(array)];
arr.sort(function (a, b) {  return a - b;  });

let n = arr.length;

let root = buildTree(arr, 0, n - 1);

prettyPrint(root);
