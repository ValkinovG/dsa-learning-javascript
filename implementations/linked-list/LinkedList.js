import { Node } from "./node.js";

export class LinkedList {
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

    getFirst() {
        return this.#head;
    }

    getLast() {
        return this.#tail;
    }

    get(index) {
        if (index < 0 || index >= this.#length) {
            throw new Error('Index is out of bounds.')
        }

        let tempNode = this.#head;

        for (let i = 0; i < index; i++) {
            tempNode = tempNode.next;
        }

        return tempNode;
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

    insert(index, value) {
        if (index < 0 || index > this.#length) {
            return false;
        }

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        if (index === this.#length) {
            this.push(value);
            return true;
        }

        const newNode = new Node(value);
        const prev = this.get(index - 1);

        newNode.next = prev.next;
        prev.next = newNode;

        this.#length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.#length) {
            throw new Error('Index is out of bounds.')
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.#length - 1) {
            return this.pop();
        }

        const prev = this.get(index - 1);
        const removedNode = prev.next;

        prev.next = prev.next.next;
        removedNode.next = null;

        this.#length--;

        return removedNode;
    }

    find(value) {
        let tempNode = this.#head;

        while (tempNode !== null) {
            if (tempNode.value === value) {
                return tempNode;
            }

            tempNode = tempNode.next;
        }

        return null;
    }

    reverse() {
        let prev = null;
        let current = this.#head;
        this.#tail = this.#head;

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.#head = prev;
    }

    size() {
        return this.#length;
    }

    clear(){
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
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