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
        if (this.#list.isEmpty()) {
            throw new Error('Can not pop from an empty stack.');
        }

        return this.#list.pop().value;
    }

    peek() {
        if (this.#list.isEmpty()) {
            throw new Error('Can not peek from an empty Stack.')
        }

        return this.#list.getLast().value;
    }

    isEmpty() {
        return this.#list.isEmpty();
    }

    size() {
        return this.#list.size();
    }

    clear() {
        this.#list.clear();
    }

    print() {
        const values = [];
        let current = this.#list.getLast();

        while (current) {
            values.push(current.value);
            current = current.prev;
        }

        console.log(`Stack (top → bottom): [${values.join(' -> ')}]`);
    }
}