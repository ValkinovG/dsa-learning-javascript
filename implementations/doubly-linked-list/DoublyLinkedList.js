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

    shift() {
        if (this.#length === 0) {
            throw new Error('Can not shift from an empty list.');
        }

        const removedNode = this.#head;

        if (this.#length === 1) {
            this.#head = null;
            this.#tail = null;
            this.#length = 0;
            return removedNode;
        }

        this.#head = this.#head.next;
        this.#head.prev = null;
        removedNode.next = null;

        this.#length--;

        return removedNode;
    }

    get(index) {
        if (index < 0 || index >= this.#length) {
            throw new Error('Index is out of bounds.')
        }

        const mid = Math.floor(this.#length / 2);

        if (index <= mid) {
            let tempDoublyNode = this.#head;
            for (let i = 0; i < index; i++) {
                tempDoublyNode = tempDoublyNode.next;
            }
            return tempDoublyNode;
        } else {
            let tempDoublyNode = this.#tail;
            for (let i = this.#length - 1; i > index; i--) {
                tempDoublyNode = tempDoublyNode.prev;
            }
            return tempDoublyNode;
        }
    }

    set(index, value) {
        try {
            const node = this.get(index);
            node.value = value;
            return true;
        } catch (err) {
            return false;
        }
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