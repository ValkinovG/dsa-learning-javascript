class CustomArray {

    #length;
    #data;

    constructor() {
        this.#length = 0;
        this.#data = {};
    }

    push(element) {
        this.#data[this.length] = element;
        this.#length++;
    }

    get(index) {
        if (index < 0 || index >= this.#length) {
            throw new Error('Index is out of bounds.');
        }

        return this.#data[index];
    }

    pop() {
        if (this.#length < 1) {
            throw new Error('Can not pop from an empty array.');
        }

        const poppedElement = this.#data[this.#length - 1];

        delete this.#data[this.#length - 1];

        this.#length--;

        return poppedElement;
    }

    shift() {
        if (this.#length < 1) {
            throw new Error('Can not shift from an empty array.');
        }

        const shiftedElement = this.#data[0];

        for (let i = 0; i < this.#length - 1; i++) {
            this.#data[i] = this.#data[i + 1];
        }

        delete this.#data[this.#length - 1];

        this.#length--;

        return shiftedElement;
    }

    unshift(element) {
        for (let i = this.length - 1; i >= 0; i--) {
            this.#data[i+1] = this.#data[i];
        }

        this.#data[0] = element;

        this.#length++;

        return this.#length;
    }

    toString() {
        if (this.#length < 1) {
            return 'Array is empty.'
        }

        let returnString = `index 0: ${this.#data[0]}`;
        for (let i = 1; i < this.#length; i++) {
            returnString += `, index ${i}: ${this.#data[i]}`
        }

        return returnString;
    }

    get length() {
        return this.#length;
    }

    get data() {
        return { ...this.#data };
    }
}