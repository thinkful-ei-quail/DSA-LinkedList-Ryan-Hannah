const Memory = require('./memory')
const memory  = new Memory()

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0
        this.ptr = memory.allocate(this.length)
        this.ARRAY_SIZE_RATIO = 3
    }
    //best case O(1), worst case O(n)
    push(value) {
        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * this.ARRAY_SIZE_RATIO)
        }
        memory.set(this.ptr + this.length, value)
        this.length++
    }

    //best, worst, avg O(n)
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size)
        if(this.ptr === null) {
            throw new Error('Out of memory')
        }
        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
        this._capacity = size
    }
    //best, worst, avg case O(1)
    get(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        return memory.get(this.ptr + index)
    }
    //best and worst case O(1)
    pop() {
        if(this.length == 0) {
            throw new Error('Index error')
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length --
        return value
    }

    //best case O(1)
    //worst case O(n)
    //avg case O(n)
    insert(index, value) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * this.ARRAY_SIZE_RATIO)
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        //[1,2,3] ==> [1,2,2,3]
        memory.set(this.ptr + index, value)
        //[1, value, 2, 3]
        this.length++
    }
    //best case O(1)
    //avg and worst O(n)
    remove(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
    }
}

function main() {
    // Create an instance of the Array class
    let arr = new Array()

    // Add an item to the array

    arr.push(3)  // length: 1, mem_capac: 3 mem_addr: 0
    arr.push(5)
    arr.push(15)
    arr.push(19)
    arr.push(45)
    arr.push(10) // length: 6 mem_cap: 12 mem_addr: 3 bc data is assigned to the last block in the mem chunk
    arr.pop();
    arr.pop();
    arr.pop(); //length: 3 mem_cap: 12 mem_addr: 3
    arr.pop();
    arr.pop();
    arr.pop();// pop 3 more times empties array
    arr.push('tauhida') // NaN is not a number array already initialized as data type integer
                        //Resize only runs if capacity is met

    console.log(arr) //print array
    console.log(arr.get(0)) //print 1st item in array
}
main()