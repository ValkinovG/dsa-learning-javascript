# 📚 Arrays in JavaScript

Arrays are ordered, indexed collections of values in JavaScript. They allow fast access by index and flexible resizing.

## ✅ Characteristics
- Indexed by numbers (0-based)
- Can hold any type of data
- Dynamic sizing
- Built-in methods for manipulation

## ⚙️ How Arrays Work Under the Hood
In JavaScript, arrays are objects with special handling:
- Keys are numeric indices stored as strings
- Length is automatically tracked and updated
- JavaScript engines optimize arrays for performance (when they're dense and sequential)

## 🧠 Common Built-In Methods
- `push()` – adds to the end
- `pop()` – removes from the end
- `shift()` – removes from the start
- `unshift()` – adds to the start
- `reverse()` – reverses the array
- `indexOf()`, `includes()` – search methods

## ⏱️ Time Complexities

| Operation   | Time Complexity | Notes                            |
|-------------|-----------------|----------------------------------|
| push        | O(1)            | Adds to end                     |
| pop         | O(1)            | Removes from end                |
| shift       | O(n)            | Must shift all elements         |
| unshift     | O(n)            | Must shift all elements         |
| indexOf     | O(n)            | Linear search                   |
| reverse     | O(n)            | Full traversal required         |

## 🔁 Mutable vs Immutable
Most array methods (like `reverse`, `pop`, `push`) mutate the original array. Use `[...array].reverse()` or `.slice()` for immutable behavior.

## 💡 When to Use Arrays
- When you need ordered data
- When frequent additions/removals are at the end
- When fast index access is important
