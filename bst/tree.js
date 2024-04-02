class TrNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    }
}

class BinaryST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        function helper(root) {
            if (!root)return new TrNode(val);
            if (val < root.val) 
                root.left = helper(root.left);
            else if (val > root.val) 
                root.right = helper(root.right) 
            return root;
        }
        this.root = helper(this.root)
    }

    deleteNode(val){
        function helper(){
            
        }
    }

}

const bst = new BinaryST()
bst.insert(7)
bst.insert(4)
bst.insert(10)
bst.insert(11)

console.log(bst)

