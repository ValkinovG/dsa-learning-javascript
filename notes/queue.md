# 🚶‍♂️ Queue (FIFO)

A **Queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle.  
This means the first element added is the first one to be removed.

---

## 📦 Use Cases

- Print queues
- Task scheduling
- CPU or process queues
- Breadth-first search (BFS)

---

## ⚙️ Operations

| Method        | Description                                      |
|---------------|--------------------------------------------------|
| `enqueue(val)`| Add element to the end of the queue              |
| `dequeue()`   | Remove and return element from the front         |
| `peek()`      | Return the front element without removing it     |
| `isEmpty()`   | Check if the queue is empty                      |
| `size()`      | Return the number of elements in the queue       |
| `clear()`     | Remove all elements from the queue               |
| `print()`     | Output the queue from front to back              |

---

## 🔄 Behavior

```
Before enqueue(30):
[10, 20]

After enqueue(30):
[10, 20, 30]
```

Then:
```
dequeue() ➜ 10
Queue becomes: [20, 30]
```

---

## 💡 Implementation Notes

- This Queue is implemented using **composition** with a `DoublyLinkedList`.
- `enqueue()` adds a value to the **tail** of the DLL (back of the queue).
- `dequeue()` removes a node from the **head** of the DLL (front of the queue).
- `peek()` returns the value of the head without removing it.
- `isEmpty()` checks whether the queue is empty.
- `size()` returns the number of elements in the queue.
- `clear()` resets the queue to an empty state.
- `print()` traverses from head to tail to show the front-to-back order.

---

## 🧪 Example

```js
const queue = new Queue();

queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

console.log(queue.peek()); // ➜ "a"
console.log(queue.dequeue()); // ➜ "a"
console.log(queue.size()); // ➜ 2

queue.print(); // Queue (front → back): [b -> c]
```

---

## ✅ Time Complexities

| Operation | Time Complexity |
|-----------|-----------------|
| Enqueue   | O(1)            |
| Dequeue   | O(1)            |
| Peek      | O(1)            |
| isEmpty   | O(1)            |
| size      | O(1)            |
| clear      | O(1)            |
| print      | O(n)            |
