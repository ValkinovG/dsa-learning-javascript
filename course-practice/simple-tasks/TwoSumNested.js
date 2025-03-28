// Two Sum (Brute Force - Nested Loops)
// Given an array of integers and a target number,
// return the indexes of the two numbers that add up to the target.
// Only one valid pair exists, and each input will have exactly one solution.
// 
// Example:
// Input: [2, 7, 11, 15], Target: 9
// Output: [0, 1] Because 2 + 7 = 9
//
// Later it will be refactored with maps.

const twoSumNested = (arr, target) => {
    const resultArr = [];
    let firstNum = null;
    let secondNum = null;

    for (let i = 0; i < arr.length; i++) {
        firstNum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            secondNum = arr[j];

            if ((firstNum + secondNum) === target) {
                resultArr.push(i);
                resultArr.push(j);
                return resultArr;
            }
        }
    }

    return [];
}

console.log(twoSumNested([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumNested([1, 3, 7, 9, 2], 11)); // [3, 4]
console.log(twoSumNested([1, 7, 11, 15], 9)); // []