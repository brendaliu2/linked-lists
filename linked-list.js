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
    } else {
      //set new node next is head
      newNode.next = this.head;
      //new new is new head
      this.head = newNode;

    }
    this.length++;

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

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
