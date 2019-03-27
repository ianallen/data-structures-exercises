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
    if (this.tail === null) {
        this.head = newNode
        this.tail = newNode
        return newNode
    } else {
        newNode.previous = this.tail
        this.tail.next = newNode
        this.tail = newNode
        return newNode
    }
}

LinkedList.prototype.addToHead = function (node) {
    const newNode = new Node(node)
    if (this.head === null) {
        this.head = newNode
        this.tail = newNode

        return newNode
    }
    else {
        if(this.head.next === null){
            newNode.next = this.tail
            this.tail.previous = this.head
            this.head = newNode

            return newNode

        }
        
        newNode.next = this.head

        this.head = newNode
        return newNode

    }

}


LinkedList.prototype.removeHead = function () {
    if (this.head === null) {
        return null
    } else {
        const value = this.head.value
        if (this.head.next !== null) {
            this.head = this.head.next
            this.head.previous = null
            return value
        } else {
            this.head = null
            this.tail = null
            return value
        }

    }
}

LinkedList.prototype.removeTail = function () {
    if (this.tail === null) {
        return null
    } else {
        const tailValue = this.tail.value
        if (this.tail.previous !== null) {
            this.tail = this.tail.previous
            this.tail.next = null
            return tailValue
        } else {
            this.head = null
            this.tail = null
            return tailValue

        }

    }
}

LinkedList.prototype.search = function () {

}