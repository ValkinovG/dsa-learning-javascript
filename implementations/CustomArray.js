class CustomArray {

    #length;
    #data;

    constructor() {
        this.#length = 0;
        this.#data = {};
    }

    get length() {
        return this.#length;
    }

    get data() {
        return { ...this.#data };
    }
}