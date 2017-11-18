class Stack {
    constructor() {
        this.storage = []
        this.minHistory = []
        this.maxHistory = []
    }
    getMin() {
        if(this.storage.length ===  0) {
            return Number.POSITIVE_INFINITY
        }
        return this.minHistory[this.minHistory.length - 1]
    }

    getMax() {
        if(this.storage.length === 0) {
            return Number.NEGATIVE_INFINITY
        }
        return this.maxHistory[this.maxHistory.length - 1]
    }

    push(value) {
        if (value <= this.getMin()){
            this.minHistory.push(value)
        }

        if (value >= this.getMax()){
            this.maxHistory.push(value)
        }

        this.storage.push(value)
    }

    pop() {
        let result = this.storage.pop()
        if (result === this.getMin()){
            this.minHistory.pop()
        }

        if (result === this.getMax()) {
            this.maxHistory.pop()
        }

        return result
    }
}

myStack = new Stack()

myStack.push(1)
myStack.push(5)
myStack.push(4)
myStack.push(3)
myStack.push(7)
myStack.push(7)
myStack.push(-1)

console.log('min is', myStack.getMin())
console.log('max is', myStack.getMax())

console.log('pop twice')
myStack.pop()
myStack.pop()

console.log('min is', myStack.getMin())
console.log('max is', myStack.getMax())

console.log('pop once more')
myStack.pop()

console.log('min is', myStack.getMin())
console.log('max is', myStack.getMax())



