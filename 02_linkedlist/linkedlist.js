var LinkedList = function () {
    this.tail = null
    this.head = null
}

var Node = function (value) {
    this.value = value
    this.previous = null
    this.next = null
}


LinkedList.prototype.addToTail = function (node) {
    const newNode = new Node(node)
    if(this.tail === null) {
        this.head = newNode
        this.tail = newNode
        return newNode
    } else {
        this.tail.next = newNode
        this.tail.next.previous = this.tail
        this.tail = newNode

        return newNode
    }
}

LinkedList.prototype.addToHead = function (node) {
    const newNode = new Node(node)
    if(!this.head) {
        this.head = newNode
        this.tail = newNode
       
        return newNode
    }

}


LinkedList.prototype.removeHead = function () {
    const head = this.head.value
    this.head = this.head.next
    this.head.previous = null
   
    return head
}

LinkedList.prototype.removeTail = function () {
    const tail = this.tail.value
    this.tail = this.tail.previous
    this.tail.next = null
   
    return tail
}

LinkedList.prototype.search = function () {

}