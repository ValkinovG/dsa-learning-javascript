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