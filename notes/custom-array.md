# 📦 CustomArray Class

This is a custom implementation of a JavaScript-like array using an object and manual indexing.

## ✨ Purpose
To understand how arrays work internally and practice building fundamental data structures from scratch.

## 🧠 Key Features
- Manual tracking of `length` using a private field
- Internal data stored in a private object
- Custom implementations of common array methods:
  - `push`, `pop`, `shift`, `unshift`
  - `deleteByIndex`, `indexOf`, `includes`, `reverse`
  - `toString`, `get`, getters for `length` and `data`
- Error handling for out-of-bounds access
- Safe data exposure using a `.data` getter (shallow copy)

## 🔍 Differences from Native Arrays
- Does not support `[]` bracket syntax (use `.get(index)` instead)
- No direct element access — all interaction is through methods
- `.data` returns a copy to avoid leaking internal state
- Fully encapsulated with private fields

## 🕹️ Example Usage
```js
const arr = new CustomArray();
arr.push("a");
arr.push("b");
arr.push("c");

console.log(arr.data); // { 0: "a", 1: "b", 2: "c" }
console.log(arr.toString()); // index 0: a, index 1: b, index 2: c

arr.pop(); // "c"
arr.shift(); // "a"
arr.unshift("z");

console.log(arr.data); // { 0: "z", 1: "b" }
console.log(arr.toString()); // index 0: z, index 1: b
```

## ⏱️ Time Complexities

| Method          | Time Complexity |
|-----------------|-----------------|
| push            | O(1)            |
| pop             | O(1)            |
| shift           | O(n)            |
| unshift         | O(n)            |
| deleteByIndex   | O(n)            |
| reverse         | O(n)            |
| indexOf         | O(n)            |
| includes        | O(n)            |
