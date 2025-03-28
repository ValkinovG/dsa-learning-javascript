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

    pop() {
        if (this.#length === 0) {
            throw new Error('Can not pop from an empty list.')
        }

        const returnNode = this.#tail;

        if (this.#length === 1) {
            this.#head = null;
            this.#tail = null;
            this.#length--;
            return returnNode;
        }

        let tempNode = this.#head;
        while (tempNode.next !== this.#tail) {
            tempNode = tempNode.next;
        }

        tempNode.next = null;
        this.#tail = tempNode;

        this.#length--;

        return returnNode;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (this.#length === 0) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.next = this.#head;
            this.#head = newNode;
        }

        this.#length++;
    }

    shift() {
        if (this.#length === 0) {
            throw new Error('Can not shift from an empty list.');
        }

        const returnNode = this.#head;

        if (this.#length === 1) {
            this.#head = null;
            this.#tail = null;
            this.#length--;
            return returnNode;
        }

        this.#head = this.#head.next;
        this.#length--;

        returnNode.next = null;
        return returnNode;
    }

    toArray() {
        const values = [];
        let current = this.#head;

        while (current) {
            values.push(current.value);
            current = current.next;
        }

        return values;
    }

    print() {
        const values = [];
        let current = this.#head;

        while (current) {
            values.push(current.value);
            current = current.next;
        }

        console.log(`LinkedList [${values.join(' -> ')}]`);
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