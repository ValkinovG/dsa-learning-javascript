// String based solution
const reverseInteger = (num) => {
    const isNegative = num < 0;
    const reversed = Math.abs(num).toString().split('').reverse().join('');
    const result = Number(reversed);
    return isNegative ? -result : result;
};

// Math based solution (optimized)
const reverseIntegerManual = (num) => {
    let reversed = 0;
    let n = Math.abs(num);

    while (n > 0){
        const digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }

    return num < 0 ? -reversed : reversed;
};

console.log(reverseInteger(123));  // 321
console.log(reverseInteger(-456)); // -654

console.log(reverseIntegerManual(123)) // 321
console.log(reverseIntegerManual(-456)) // -654

