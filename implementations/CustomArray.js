class CustomArray {

    #length;
    #data;

    constructor() {
        this.#length = 0;
        this.#data = {};
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