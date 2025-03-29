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
        return this.#list.pop();
    }
}