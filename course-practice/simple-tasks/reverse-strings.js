// Solution using built-in methods:
const reverseString = (str) => {
    return str.split('').reverse().join('');
}

// Manual reversal for practice:
const reverseStringManual = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

console.log(reverseString('Hello'));
console.log(reverseStringManual('Hello'));