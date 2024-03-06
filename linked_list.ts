export {};


class LiNode{
    val : number;
    next : null | LiNode

    constructor(val : number){
        this.val = val;
        this.next = null;
    }
}
class SiLiList{
    head : null | LiNode;
    tail : null | LiNode;

    constructor(){
        this.head = null
        this.tail = null
    }

    insertNode(val : number){
        let newNode = new LiNode(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            return;
        }

        (this.tail as LiNode).next = newNode;
        this.tail = newNode;
    }

}


const list = new SiLiList()
list.insertNode(3)
list.insertNode(5)
list.insertNode(4)

console.log(list)

