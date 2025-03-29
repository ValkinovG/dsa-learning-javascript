# 🔗 Singly Linked List

A **Singly Linked List** is a linear data structure where each element (called a **node**) points to the **next** node in the sequence.

---

## 🧱 Node Structure

Each node typically contains:
- `value`: the data
- `next`: reference to the next node (or `null` if it's the last node)

Example:

```
[10] → [20] → [30] → null
```

---

## 🧠 Key Characteristics

- Dynamic size (no need to predefine size like arrays)
- Efficient insertions/removals at the **head**
- No backward traversal
- Requires traversal for access by index

---

## 🔁 Common Operations

| Operation   | Time Complexity |
|-------------|------------------|
| Insertion at head (`unshift`) | O(1) |
| Insertion at tail (`push`)    | O(n) (O(1) if tail pointer is kept) |
| Deletion from head (`shift`)  | O(1) |
| Access by index (`get`)       | O(n) |
| Search for value (`find`)     | O(n) |

---

## 🧰 Use Cases

- Queues (FIFO)
- Hash table chaining (collision resolution)
- Lightweight dynamic collections

---
