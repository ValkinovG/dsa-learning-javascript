import { DoublyLinkedList } from "../doubly-linked-list/DoublyLinkedList.js"

class Stack {
    #list;

    constructor() {
        this.#list = new DoublyLinkedList();
    }

    push(value) {
        this.#list.push(value);
    }

    pop() {
        if (this.#list.isEmpty()) {
            throw new Error('Can not pop from an empty stack.');
        }

        return this.#list.pop().value;
    }
}