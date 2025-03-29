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