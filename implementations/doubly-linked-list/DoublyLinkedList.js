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