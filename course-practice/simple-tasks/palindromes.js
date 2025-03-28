// Optimized two-pointer solution
const isPalindrome = (str) => {
    for (let i = 0; i < Math.ceil(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('hello')); // false