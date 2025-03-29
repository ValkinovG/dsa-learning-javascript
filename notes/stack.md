# 🥞 Stack (LIFO)

A **Stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle.  
This means the last element added is the first one to be removed.

---

## 📦 Use Cases

- Undo/redo functionality
- Call stack in programming languages
- Parentheses validation
- Expression evaluation
- Depth-first search (DFS)

---

## ⚙️ Operations

| Method      | Description                                 |
|-------------|---------------------------------------------|
| `push(val)` | Add an element to the top of the stack      |
| `pop()`     | Remove and return the top element           |
| `peek()`    | Return the top element without removing it  |
| `isEmpty()` | Check if the stack is empty                 |
| `size()`    | Return the number of elements in the stack  |
| `clear()`   | Remove all elements from the stack          |
| `print()`   | Output the stack from top to bottom         |

---

## 🔄 Behavior

```
Before push(30):
Top → [20, 10]

After push(30):
Top → [30, 20, 10]
```

---

## 💡 Implementation Notes

- This Stack is implemented using **composition** with a `DoublyLinkedList`.
- `push()` adds a new value to the tail of the DLL (top of the stack)
- `pop()` removes and returns the tail of the DLL.
- `peek()` returns the tail's value without removing it.
- `isEmpty()` checks if the underlying DLL has any nodes.
- `size()`  returns the current number of elements (from DLL).
- `clear()`  resets the DLL by setting head, tail to null, and length to 0.
- `print()`  traverses from tail → head and logs values from top to bottom.

---

## 🧪 Example

```js
const stack = new Stack();

stack.push("a");
stack.push("b");
stack.push("c");

console.log(stack.peek()); // ➜ "c"
console.log(stack.pop());  // ➜ "c"
console.log(stack.size()); // ➜ 2

stack.print(); // Stack (top → bottom): [b -> a]
```

---

## ✅ Time Complexities

| Operation | Time Complexity |
|-----------|-----------------|
| Push      | O(1)            |
| Pop       | O(1)            |
| Peek      | O(1)            |
| isEmpty   | O(1)            |
| size      | O(1)            |
| clear      | O(1)            |
| print      | O(n)            |

