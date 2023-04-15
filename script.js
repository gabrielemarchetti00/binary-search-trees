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

    root = buildTree();
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

function insert(root, data) {
    /* If the tree is empty, return a new node */
    if (root == null) {
        root = new Node(data);
        return root;
    }

    /* Otherwise, recur down the tree */
    if (data < root.data)
        root.left = insert(root.left, data);
    else if (data > root.data)
        root.right = insert(root.right, data);

    /* return the (unchanged) node pointer */
    return root;
}

function deleteNode(root, data) {
    /* Base Case: If the tree is empty */
    if (root == null) 
        return root;

    /* Otherwise, recur down the tree */
    if (data < root.data)
        root.left = deleteNode(root.left, data);
    else if (data > root.data)
        root.right = deleteNode(root.right, data);
    // if key is same as root's
    // key, then This is the
    // node to be deleted
    else {
        // node with only one child or no child
        if (root.left == null)
            return root.right;
        else if (root.right == null)
            return root.left;

        // node with two children: Get the inorder
        // successor (smallest in the right subtree)
        root.data = minValue(root.right);

        // Delete the inorder successor
        root.right = deleteNode(root.right, root.data);
    }

    return root;
}

function minValue(root){
    let minv = root.data;
        while (root.left != null)
        {
            minv = root.left.data;
            root = root.left;
        }
        return minv;
}

function find(root, data) {
    // Base Cases: root is null
    // or key is present at root
    if (root == null || root.data == data)
        return root;
 
    // Key is greater than root's key
    if (root.data < data)
       return find(root.right, data);
    // Key is smaller than root's key
    else if (root.data > data)
        return find(root.left, data);
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

insert(root, 1000);
deleteNode(root, 8);
prettyPrint(root);

console.log(find(root, 1000));

