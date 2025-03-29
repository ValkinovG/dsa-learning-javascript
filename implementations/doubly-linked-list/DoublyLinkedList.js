import { DoublyNode } from "./DoublyNode.js";

class DoublyLinkedList {
    #head;
    #tail;
    #length;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }

    push(value) {
        const newDoublyNode = new DoublyNode(value);

        if (this.#length === 0) {
            this.#head = newDoublyNode;
            this.#tail = newDoublyNode;
        } else {
            newDoublyNode.prev = this.#tail;
            this.#tail.next = newDoublyNode;
            this.#tail = newDoublyNode;
        }

        this.#length++;
    }

    pop() {
        if (this.#length === 0) {
            throw new Error('Can not pop from an empty list.');
        }

        const removedNode = this.#tail;

        if (this.#length === 1) {
            this.#head = null;
            this.#tail = null;
            this.#length = 0;
        } else {
            this.#tail = this.#tail.prev;
            this.#tail.next = null;
        }

        removedNode.prev = null;

        this.#length--;

        return removedNode;
    }

    unshift(value) {
        const newDoubleNode = new DoublyNode(value);

        if (this.#length === 0) {
            this.#head = newDoubleNode;
            this.#tail = newDoubleNode;
        } else {
            this.#head.prev = newDoubleNode;
            newDoubleNode.next = this.#head;
            this.#head = newDoubleNode;
        }

        this.#length++;
    }

    getFirst() {
        return this.#head;
    }

    getLast() {
        return this.#tail;
    }

    size() {
        return this.#length;
    }

    clear() {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }

    isEmpty() {
        return this.#length === 0;
    }

    get head() {
        return this.#head;
    }

    get tail() {
        return this.#tail;
    }

    get length() {
        return this.#length;
    }
}