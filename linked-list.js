class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// 1. Create a linked list class
class LinkedList {
    constructor() {
        this.head = null
        // this.tail = null
        this.size = 0
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (!this.head) {
            this.insertFirst(item)
        } else {
            let currentNode = this.head
            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = new _Node(item, null)
        }
    }
    remove(item) {
        //if list is empty
        if (!this.head) {
            return null
        }
        //remove from beginning O(1)
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }

        //start at beginning
        let currentNode = this.head

        //keep track of previous
        let previousNode = this.head

        while ((currentNode !== null) && (currentNode.value !== item)) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        if (currentNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currentNode.next
        //remove from middle O(n) linear
        //remove from end O(n) linear
    }
    find(item) {
        //start at beginning
        let currentNode = this.head

        //if list empty
        if (!this.head) {
            return null
        }
        //iterate and check for item
        while (currentNode.value !== item) {
            //if not exist return null
            if (currentNode.next === null) {
                console.log('item not found')
                return null
            } else {
                //if not equal but more items, keep iterating
                currentNode = currentNode.next
            }
        }
        //break out of while when node is found
        return currentNode
    }
    insertBefore(newItem, item) {
        //start at beginning
        let currentNode = this.head

        //keep track of previous
        let previousNode = this.head

        while ((currentNode !== null) && (currentNode.value !== item)) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        if (currentNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = new _Node(newItem, currentNode)
    }
    insertAfter(newItem, item) {
        //start at beginning
        let currentNode = this.head
        let nextNode = this.head

        while ((currentNode !== null) && (currentNode.value !== item)) {
            currentNode = currentNode.next
            nextNode = currentNode.next
        }
        if (currentNode === null) {
            console.log('Item not found')
            return
        }
        currentNode.next = new _Node(newItem, nextNode)
    }
    insertAt(newItem, position) {
        let currentNode = this.head
        let previousNode = this.head
        let counter = 1

        while (counter <= position) {
            if (counter < position) {
                previousNode = currentNode
                currentNode = currentNode.next
            }
            if (counter === position) {
                previousNode.next = new _Node(newItem, currentNode)
            }
            counter++
        }
    }
}


// 3. Supplemental functions for a linked list
function display(list) { //displays linked list
    let node = list.head
    while (node !== null) {
        console.log(`${node.value}`)
        node = node.next
    }
}
function size(list) { //returns size of the linked list
    let counter = 0;
    let currentNode = list.head
    while((currentNode !== null)) {
        currentNode = currentNode.next
        counter++
    }
    return counter
}
function isEmpty(list) { //finds if list is empty or not(without using the size)
    let counter = 0;
    let currentNode = list.head
    while((currentNode !== null)) {
        currentNode = currentNode.next
        counter++
    }
    if(counter === 0) {
        return true
    } else {
        return false
    }
}
function findPrevious(list, item) { //finds node before item looking for
    //start at beginning
    let currentNode = list.head

    //keep track of previous
    let previousNode = list.head

    while ((currentNode !== null) && (currentNode.value !== item)) {
        previousNode = currentNode
        currentNode = currentNode.next
    }
    if(currentNode === null) {
        console.log('Item not found')
        return
    }
    return previousNode
}
function findLast(list) { //returns last node in the linked list
    //start at beginning
    let currentNode = list.head

    //instantiate this.tail
    let tail = null

    while (currentNode.next !== null) {
        currentNode = currentNode.next
    }
    return tail = currentNode
}


// 2. Create a singly linked list
const SLL = new LinkedList()
// function main() {
//     const SLL = new LinkedList()
//     SLL.insertLast('Apollo')
//     SLL.insertLast('Boomer')
//     SLL.insertLast('Helo')
//     SLL.insertLast('Husker')
//     SLL.insertLast('Starbuck')
//     SLL.insertLast('Tauhida')
//     SLL.remove('Squirrel') //remove item that does not exist
//     SLL.insertBefore('Athena', 'Boomer') //insert Athena before Boomer
//     SLL.insertAfter('Hotdog', 'Helo') //insert Hotdog after Helo
//     SLL.insertAt('Kat', 3)
//     SLL.remove('Tauhida')
//     console.log(size(SLL))
//     console.log(isEmpty(SLL))
//     console.log(findPrevious(SLL, 'Hotdog'))
//     console.log(findLast(SLL))
//     display(SLL)
// }
// main()

// 4. Mystery Program gets node after Polynomial time O(2^n)
// removing duplicates from linked list



// 5. Reverse a list iterative
const ll = new LinkedList()
function reverse(list) {
    let currentNode = list.head
    let previousNode = null
    let nextNode = null

    while(currentNode !== null) {
        nextNode = currentNode.next
        currentNode.next = previousNode
        previousNode = currentNode
        currentNode = nextNode
    }
    list.head = previousNode
    return list
}
// ll.insertLast(100)
// ll.insertLast(200)
// ll.insertLast(300)
// display(ll)
// reverse(ll)
// display(ll)


// 6. 3rd from the end
const llv2 = new LinkedList()
function thirdFromEnd(list) {
    //get size of list subtract by 3
    const position = size(llv2) - 2

    //instantiate counter at 0
    let counter = 1

    //start at beginning
    let currentNode = list.head

    //loop thru list until size-3 position
    while(currentNode !== null && counter <= position) {
        currentNode = currentNode.next
        counter++
        if(counter === position) {
            return currentNode.value
        }
    }
    if (currentNode.next === null) {
        console.log('item not found')
        return null
    }
}
llv2.insertLast('YOU')
llv2.insertLast('ARE')
llv2.insertLast('THE')
llv2.insertLast('IMPOSTER')
llv2.insertLast('BITCH')
display(llv2)
console.log(thirdFromEnd(llv2))