/*
= Circular Linked List =
Author: Mohit H. Paryani
Date Created: 09-Nov-2019
Last Modified: 16-Nov-2019
*/

export class CircularLinkedList {
    constructor() {
        this.last = null;
        this.size = 0;
    }

    // Add value to end of LL
    addAtEnd(value) {
        var node = new CircularLinkedListNode(value);
        if (this.last == null) {
            node.next = node;
            this.last = node;
        } else {
            node.next = this.last.next;
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        console.log(`${value} added at the end`);
    }

    // Add value at specific position in LL
    addAtPosition(value, position) {
        if (position < 1 || position > this.size) {
            console.log(`Cannot add at position ${position}`);
            return;
        }

        var node = new CircularLinkedListNode(value);
        var currentPosition = 0;
        var current = this.last;

        while (currentPosition < position - 1) {
            current = current.next;
            currentPosition++;
        }
        node.next = current.next;
        current.next = node;
        this.size++;

        console.log(`${value} added at position ${position}`);
    }

    // Add multiple elements at the end
    addMultipleElementsAtEnd(p_arrElements){
        let ctx = this;
        if(p_arrElements.length){
            p_arrElements.forEach(function(element){
                ctx.addAtEnd(element);
            });
        }
    }

    // Reverse circular linked list
    reverseCircularLinkedList() {
        let current = this.last;
        let first = current.next;
        let second = first.next;
        if (current != null) {
            while (first != this.last) {
                first.next = current;
                current = first;
                first = second;
                second = second.next;
            }
            if (first == this.last) {
                first.next = current;
            }
            this.last = second;
            console.log('Circular Linked List reversed successfully')
        }
    }

    // remove last element from LL
    removeLastElement() {
        var current = this.last;

        if (current != null) {
            if (this.last.next == this.last) {
                this.last = null;
            } else {
                while (current.next != this.last) {
                    current = current.next;
                }
                current.next = this.last.next;
                let value = this.last.value;
                this.last.next = null;
                this.last = current;
                console.log(`${value} removed from Circular Linked List`)
            }
            this.size--;
        } else {
            console.log("Circular Linked List is empty");
        }
    }

    // remove element with specific value from LL
    removeSpecificElement(value) {
        var current = this.last;

        // Empty LL
        if (current == null) {
            console.log("Circular Linked List is empty");
            return;
        }

        // Last node being deleted
        if (current.value == value) {
            this.removeLastElement();
            return;
        }

        while (current.next != this.last && current.next.value != value) {
            current = current.next;
        }
        if (current.next.value == value) {
            let temp = current.next;
            current.next = temp.next;
            console.log(`${temp.value} deleted`);
            temp.next = null;
            this.size--;
            console.log(`${temp.value} removed from Circular Linked List`)
        } else {
            console.log('Element Not Found in the Circular Linked List');
        }
    }

    // remove element at specific position from LL
    removeElementAtPosition(position) {
        if (position < 1 || position > this.size) {
            console.log(`${position} is an invalid position`);
            return;
        }

        if (this.last.next == this.last) {
            console.log(`${this.last.value} at position ${position} removed from Circular Linked List`)
            this.last = null;
            this.size--;
            return;
        }

        if (position == this.size) {
            this.removeLastElement();
            return;
        }

        var current = this.last;
        var currentPosition = 0;
        while (currentPosition < position - 1) {
            current = current.next;
            currentPosition++;
        }

        if (currentPosition + 1 == position) {
            let temp = current.next;
            current.next = temp.next;
            temp.next = null;
            console.log(`Element ${temp.value} at position ${currentPosition + 1} is removed from Circular Linked List`);
        }
        this.size--;
    }

    // Print all the elements of LL
    printList() {
        var ll = "┌-=>";

        if (this.last == null) {
            console.log(`Linked list is empty`);
        } else {
            let current = this.last.next;
            while (current != this.last) {
                ll = `${ll} ${current.value} =>`;
                current = current.next;
            }
            if (current == this.last) {
                ll = `${ll} ${current.value} =>-┐\n|`;
            }
            var l_length = ll.length - 4;
            for (let i = 0; i < l_length; i++) {
                ll = `${ll}_`;
                ll = i == l_length - 1 ? `${ll}|` : `${ll}`;
            }
            console.log(`${ll}\nSize: ${this.size}`);
        }
    }

    // Print the size of LL
    sizeOfList() {
        console.log(`Current size of Circular Linked List is ${this.size}`);
    }

    // Print if the LL is empty or not
    isEmpty() {
        if (this.size == 0) {
            console.log("Circular Linked List is empty");
        } else {
            console.log("Circular Linked List is not empty");
        }
    }
}

export class CircularLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        // this.prev = null; // uncomment this and add relevant handling if you want doubly linked list
    }
}

function CircularLLTest() {
    var cll = new CircularLinkedList();
    cll.isEmpty();
    cll.addAtEnd(1);
    cll.printList();
    cll.removeLastElement();
    cll.printList();
    cll.addAtEnd(1);
    cll.printList();

    cll.addAtEnd(4);
    cll.addAtEnd(7);
    cll.addAtEnd(3);
    cll.addAtPosition(5, 1);
    cll.printList();

    cll.addAtEnd(4);
    cll.addAtEnd(3);
    cll.printList();
    cll.removeElementAtPosition(4);
    cll.printList();
    cll.removeSpecificElement(3);
    cll.printList();
    cll.reverseCircularLinkedList();
    cll.printList();
    cll.addAtEnd(7);
    cll.addAtEnd(4);
    cll.addAtPosition(5, 0);
    cll.addAtEnd(9);
    cll.removeLastElement();
    cll.printList();
    cll.addMultipleElementsAtEnd([21,65,78]);
    cll.printList();
    cll.addAtEnd(5);
    cll.addAtPosition(5, 15);
    cll.printList();

    cll.isEmpty();
    cll.printList();
    cll.sizeOfList();
}