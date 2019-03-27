
var Queue = function() {
  this.queue = {}
  this._length = 0
  this._headPosition = 0
}

Queue.prototype.size = function() {
    return this._length - this._headPosition
}

Queue.prototype.enqueue = function(item) {
    if(!this.queue) {
        this.queue = {}
    }
    this.queue[this._length] = item
    this._length++
}

Queue.prototype.dequeue = function() {
    if(this.size() <= 0) return undefined

    const firstItem = this.queue[this._headPosition]
    delete this.queue[this._headPosition] 

    this._headPosition++
    return firstItem
}

      
 
