import { Node } from "./node.js";

class LinkedList {
    #head;
    #tail;
    #length

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.#length === 0) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            this.#tail = newNode;
        }

        this.#length++;
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