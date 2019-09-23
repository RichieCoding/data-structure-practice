class Node {
  constructor(value) {
    this.vaule = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    // First we'll declare a newNode variable and create a new Node instance
    let newNode = new Node(value)
    // Check if this the head is null then set head and tail to our first Node
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
    // If the head is not null then set the current tail.next to our newNode that we just passed in. Then we'll set our newNode as the current tail 
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this;
  }

  pop() {
    // Checks to see if head is null, if so return undefined
    if (!this.head) return undefined
    // Declare two variables to keep track of our tail
    let current = this.head
    let newTail = this.head
    // Loop through as long as current if not null and set our newTail to the current while it being behind the current by one
    while(current) {
      newTail = current
      current = current.next
    }
    // Set our tail to be the newTail which should be the second to last node then set the tail.next to point to nothing which will be null
    this.tail = newTail
    this.tail.next = null
    // Checks to see if its the last node in our list and if so put head and tail to null
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    // Decrement the length each time we call pop()
    this.length--
    // Return our current Node which after the while loop should have been the last Node that we began with
    return current
  }

  shift() {
    if (!this.head) return undefined
    let previousHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return previousHead
   }

   unshift(value) {
     let newNode = new Node(value)
     if(!this.head) {
       this.head = newNode
       this.tail = newNode
     } else {
       newNode.next = this.head
       this.head = newNode
     }
     this.length++
     return this
   }


}

