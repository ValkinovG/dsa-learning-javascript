import { DoublyLinkedList } from "../doubly-linked-list/DoublyLinkedList.js";

export class Queue {

    #list

    constructor() {
        this.#list = new DoublyLinkedList();
    }

    enqueue(value) {
        this.#list.push(value);
    }

    dequeue() {
        if (this.#list.isEmpty()) {
            throw new Error('Can not dequeue from an empty queue.');
        }

        return this.#list.shift().value;
    }

    peek() {
        if (this.#list.isEmpty()) {
            throw new Error('Can not peek from an empty Queue.')
        }

        return this.#list.getFirst().value;
    }

    isEmpty() {
        return this.#list.isEmpty();
    }
}