# 📈 Big O Notation – Time & Space Complexity

## 🔍 What is Big O Notation?
Big O notation describes the **performance of an algorithm** in terms of:
- **Time complexity** (how fast it runs as input size increases)
- **Space complexity** (how much memory it uses)

Big O notation **ignores constants** and focuses on **how the algorithm scales** with input size `n`.

---

## 📊 Common Big O Complexities

| Big O | Name              | Example Algorithms |
|-------|------------------|--------------------|
| O(1)  | Constant Time    | Accessing an array index |
| O(log n) | Logarithmic Time | Binary Search |
| O(n)  | Linear Time      | Looping through an array |
| O(n log n) | Linearithmic Time | Merge Sort, Quick Sort |
| O(n²) | Quadratic Time   | Nested loops (e.g., Bubble Sort) |
| O(n³) | Cubic Time       | Triple nested loops |
| O(2ⁿ) | Exponential Time | Recursive Fibonacci |
| O(n!) | Factorial Time   | Traveling Salesman Problem |

---

## 🚀 Examples of Big O Complexities

Below are examples demonstrating different time complexities **in increasing order of complexity**:

---

### **O(1) - Constant Time**
- Runs in the **same amount of time** regardless of `n`.
- Example: **Accessing an array element by index**.
```js
function getFirstElement(arr) {
    return arr[0]; // Always takes the same time
}
```

---

### **O(log n) - Logarithmic Time**
- The **problem size reduces by half** with each iteration.
- Example: **Binary Search on a sorted array**.
```js
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

---

### **O(n) - Linear Time**
- The number of operations grows **proportionally** to `n`.
- Example: **Looping through an array**.
```js
function printAllItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); // Runs n times
    }
}
```

---

### **O(n log n) - Linearithmic Time**
- **Divides the problem into smaller chunks** and sorts them recursively.
- Example: **Merge Sort (or Quick Sort in the average case)**.
```js
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) result.push(left.shift());
        else result.push(right.shift());
    }
    return [...result, ...left, ...right];
}
```

---

### **O(n²) - Quadratic Time**
- Nested loops cause the **number of operations to grow as n²**.
- Example: **A double loop iterating over a 2D array**.
```js
for (let i = 0; i < n; i++) {       
    for (let j = 0; j < n; j++) {    
        console.log("Operation"); // Runs n * n times
    }
}
```

---

### **O(n³) - Cubic Time**
- **Triple nested loops** cause the number of operations to grow as `n³`.
- Example: **Triple nested loops processing 3D data**.
```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            console.log("Processing data"); // Runs n * n * n times
        }
    }
}
```

---

### **O(2ⁿ) - Exponential Time**
- Each step **doubles** the number of operations.
- Example: **Recursive Fibonacci sequence**.
```js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```
- Every call **splits into two recursive calls**, leading to exponential growth.

---

### **O(n!) - Factorial Time**
- The worst case, where **operations explode exponentially**.
- Example: **Brute-force solving Traveling Salesman Problem (TSP)**.
```js
function permutations(arr, temp = []) {
    if (!arr.length) console.log(temp);
    for (let i = 0; i < arr.length; i++) {
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)], [...temp, arr[i]]);
    }
}
permutations(["A", "B", "C"]); // Outputs all possible orderings
```
- As `n` increases, **number of operations = `n!` (factorial growth).**  

---

## 🎯 Key Takeaways
✅ **Lower Big O is better** (`O(log n)` is much better than `O(n²)`).  
✅ **Use efficient algorithms** for large inputs.  
✅ **Recursive functions** often lead to **O(n) or O(2ⁿ) complexity**.  
✅ **Big O ignores constants** (`3(n²) → O(n²)`) to focus on scalability.  

---



## 📝 Summary

| Complexity | Performance | Example |
|------------|------------|---------|
| O(1)       | ✅ Fast | Accessing an array index |
| O(log n)   | ⚡ Fast-ish | Binary Search |
| O(n)       | 🔄 Average | Looping through an array |
| O(n log n) | 🟡 Slower | Quick Sort, Merge Sort |
| O(n²)      | 🚨 Slow | Nested loops |
| O(n³)      | 🛑 Very slow | Triple nested loops |
| O(2ⁿ)      | ❌ Extremely slow | Recursive Fibonacci |
| O(n!)      | 🔥 Impractical | Brute-force permutations (TSP) |




---

## 📌 Additional Notes
- Time complexity helps **predict how an algorithm scales** with bigger inputs.  
- **Optimizing algorithms** to improve Big O is crucial for large datasets.  
- **Interview tip:** Always consider **worst-case complexity** unless stated otherwise.

---
