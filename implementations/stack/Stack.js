import { DoublyLinkedList } from "../doubly-linked-list/DoublyLinkedList.js"

class Stack {
    #list;

    constructor() {
        this.#list = new DoublyLinkedList();
    }
}