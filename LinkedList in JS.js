/*
= Linked List =
Author: Mohit H. Paryani
Date Created: 21-Feb-2019
Last Modified: 10-Nov-2019
*/

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add value to end of LL
    addAtEnd(value) {
        var node = new Node(value);
        if (this.head == null) {
            this.head = node;
        } else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // Add value at specific position in LL
    addAtPosition(value, position) {
        var node = new Node(value);
        var current = this.head;
        if (position < 1 || position > this.size) {
            console.log(`Cannot add at position ${position}`);
            return;
        }

        if (position == 1) {
            node.next = this.head;
            this.head = node;
        } else {
            /*
            p = 4
            1  2  3  4  5  6  7  8
            c  c  c
            cp cp cp */
            var currentPosition = 1;
            while (currentPosition < position - 1) {
                currentPosition++;
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        }
        this.size++;
    }

    // remove last element from LL
    removeLastElement() {
        var current = this.head;

        if (current != null) {
            while (current.next != null && current.next.next != null) {
                current = current.next;
            }
            // Size of LL is 1
            if (current.next == null) {
                this.head = null;
            } else {
                // LL with multiple elements
                if (current.next.next == null) {
                    current.next = null;
                }
            }
            this.size--;
        } else {
            console.log("Linked List is empty");
        }
    }

    // remove element with specific value from LL
    removeSpecificElement(value) {
        var current = this.head;

        // Empty LL
        if (current == null) {
            console.log("Linked List is empty");
            return;
        }

        // Head node being deleted
        if (current.value == value) {
            this.head = current.next;
            this.size--;
            return;
        }

        while (current.next != null && current.next.value != value) {
            current = current.next;
        }
        if (current.next.value == value) {
            let temp = current.next;
            current.next = current.next.next;
            console.log(`${temp.value} deleted`);
            temp.next = null;
            this.size--;
            return;
        } else {
            console.log('Element Not Found in Linked List');
        }
    }

    // remove element at specific position from LL
    removeElementAtPosition(position) {
        var current = this.head;
        var currentPosition = 1;
        if (position < 1 || position > this.size) {
            console.log(`${position} is an invalid position`);
            return;
        }

        if (position == 1) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        while (currentPosition != position - 1) {
            current = current.next;
            currentPosition++;
        }

        if (currentPosition + 1 == position && current.next != null) {
            let temp = current.next;
            current.next = current.next.next;
            temp.next = null;
            console.log(`Element at ${currentPosition+1} is deleted successfully`);
        }
        this.size--;
    }

    // Print all the elements of LL
    printList() {
        var current = this.head;
        var ll = "";
        do {
            if (current.next != null) { ll = ll + current.value + " => "; }
            else { ll = ll + current.value + ""; }
            current = current.next;
        } while (current);
        console.log(ll);
    }

    // Print the size of LL
    sizeOfList() {
        console.log(`Current size of LL is ${this.size}`);
    }

    // Print if the LL is empty or not
    isEmpty() {
        if (this.size == 0) {
            console.log("LL is empty");
        } else {
            console.log("LL is not empty");
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        // this.prev = null; // uncomment this and add relevant handling if you want doubly linked list
    }
}

function LLTest() {
    var ll = new LinkedList();
    ll.isEmpty();
    ll.addAtEnd(1);
    ll.addAtEnd(4);
    ll.addAtEnd(7);
    ll.addAtEnd(3);
    ll.addAtPosition(5, 1);
    ll.addAtEnd(4);
    ll.addAtEnd(3);
    ll.removeElementAtPosition(4);
    ll.removeSpecificElement(3);
    ll.addAtEnd(7);
    ll.addAtEnd(4);
    ll.addAtPosition(5, 0);
    ll.addAtEnd(9);
    ll.removeLastElement();
    ll.addAtEnd(5);
    ll.addAtPosition(5, 15);

    ll.isEmpty();
    ll.printList();
    ll.sizeOfList();
}