# 🔁 Doubly Linked List

A **Doubly Linked List** is a type of linked list where each node has **two pointers**:
- One to the **next** node
- One to the **previous** node

---

## 🧱 Node Structure

Each node contains:
- `value`: the data
- `next`: reference to the next node
- `prev`: reference to the previous node

Example:

```
null ← [10] ⇄ [20] ⇄ [30] → null
```

---

## 🧠 Key Characteristics

- Can be traversed in **both directions**
- Easier and faster insertions/removals at both ends
- Uses more memory (due to extra pointer)
- More complex implementation than singly linked lists

---

## 🔁 Common Operations

| Operation           | Time Complexity |
|---------------------|------------------|
| Insertion at head/tail | O(1) |
| Deletion from head/tail | O(1) |
| Access by index        | O(n) (can optimize direction) |
| Reverse in place       | O(n) |

---

## 🧰 Use Cases

- Browser history navigation
- Undo/Redo functionality
- LRU Cache
- Deques (Double-ended queues)

---

## 📌 Singly vs Doubly

| Feature         | Singly LL | Doubly LL |
|-----------------|-----------|------------|
| Backward traversal | ❌ | ✅ |
| Extra memory per node | ❌ | ✅ |
| Insert/delete from end | O(n) | O(1) |
| Simpler structure     | ✅ | ❌ |

---
