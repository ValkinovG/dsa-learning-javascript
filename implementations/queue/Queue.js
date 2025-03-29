import { DoublyLinkedList } from "../doubly-linked-list/DoublyLinkedList.js";

export class Queue {

    #list

    constructor() {
        this.#list = new DoublyLinkedList();
    }

    enqueue(value) {
        this.#list.push(value);
    }
}