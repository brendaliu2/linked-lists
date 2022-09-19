/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    //make new node
    const newNode = new Node(val);
    //if empty list, set newnode as head and tail
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //set tail next to new node
      this.tail.next = newNode;
      //set this.tail to new node
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    //make new node
    const newNode = new Node(val);
    //if empty list, set newnode as head and tail
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      //set new node next is head
      newNode.next = this.head;
      //new new is new head
      this.head = newNode;
      this.length++;

    }

  }

  /** pop(): return & remove last item. */

  pop() {
    //if length = 0 return undefined
    if(!this.length) return undefined;
    //if length = 1
      //set head and tail to null
      //return original head
    if(this.length === 1){
      const oldHead = this.head;
      this.head = null;
      this.tail = null
      this.length = 0;
      return oldHead.val;
    } else {
      //walk through list
        //if curr.next is tail, set as new tail
        //return old tail
      let current = this.head;
      while(current.next !== this.tail){
        current = current.next;
      }
      const oldTail = this.tail;
      this.tail = current;
      current.next = null;
      this.length--;
      return oldTail.val;
    }

  }

  /** shift(): return & remove first item. */

  shift() {
    //if length = 0 return undefined
    if(!this.length) return undefined;
     //if length = 1
      //set head and tail to null
      //return original head
      if(this.length === 1){
        const oldHead = this.head;
        this.head = null;
        this.tail = null
        this.length = 0;
        return oldHead.val;
      } else{
        const current = this.head;
        this.head = current.next;
        this.length--;
        return current.val;
      }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let counter = 0;
    let current = this.head;
    if(idx >= this.length || idx < 0){
      throw new Error();
    }

    while(counter !== idx && current.next !== null){
      counter++;
      current = current.next;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let counter = 0;
    let current = this.head;
    if(idx >= this.length || idx < 0){
      throw new Error();
    }

    while(counter !== idx){
      counter++;
      current = current.next;
    }

    current.val=val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let counter = 0;
    let current = this.head;

    if(idx < 0){
      throw new Error();
    }

    const newNode = new Node(val);
    
    if(!this.length){
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }
    
    if(idx === 0){
      const oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      this.length++;
      return;
    }
    

    if(idx === this.length){
      const oldTail = this.tail;
      this.tail = newNode;
      oldTail.next = newNode;
      this.length++;
      return;
    }

    while(counter < idx - 1){
      counter++;
      current = current.next;
    }

    const oldNode = current.next;
    current.next = newNode;
    newNode.next = oldNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {
    let counter = 0;
    let current = this.head;
    if(idx >= this.length || idx < 0 || !this.length){
      throw new Error();
    }

    if (idx === 0){
      return this.shift()
    }
    
    while(counter !== idx - 1 && current.next !== this.tail){
      counter++;
      current = current.next;
    }
    
    
    if(current.next === this.tail){
      return this.pop()
    } else {
      const leftNode = current;
      const removeNode = current.next
      const rightNode = removeNode.next;
  
      leftNode.next = rightNode;
      this.length--;
      return removeNode.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.length) return 0;
    
    let current = this.head;
    let sum = 0;
    
    while(current.next !== null){
      sum += current.val;
      current = current.next;
    }
    
    sum += this.tail.val;
    
    return sum / (this.length);
    
  }
}

module.exports = LinkedList;
