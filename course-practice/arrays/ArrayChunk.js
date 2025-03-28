// Array Chunk
// Given an input array and a chunk size,
// split the array into smaller arrays ("chunks") of the given size.
// The final chunk may be smaller if there are not enough elements left.
//
// Example:
// chunkArray([1, 2, 3, 4, 5], 2)
// Output: [[1, 2], [3, 4], [5]]

const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];

    let i = 0;
    while(i<arr.length){
        const newArr = [];

        for(let j=0; j<chunkSize; j++){
            if(i >= arr.length){
                break;
            }
            newArr.push(arr[i]);
            i++;
        }

        chunkedArray.push(newArr);
    }

    return chunkedArray;
}

console.log(chunkArray([1,2,3,4,5,6,7,8], 3));  // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
console.log(chunkArray([1,2,3,4,5], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]