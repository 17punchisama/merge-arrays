# 🔢 Merge Three Arrays – TypeScript + Jest

This project implements a `merge()` function that merges **three sorted arrays** into one ascending array **without using `.sort()`**.

### Array Requirements
- `collection_1` → sorted **ascending**
- `collection_2` → sorted **ascending**
- `collection_3` → sorted **descending**

The project includes:
- Input validation  
- Error handling  
- Full Jest unit test suite  
- Optional HTML test report  

---

## 📦 Installation & Setup

Clone this repository:

```bash
git clone https://github.com/17punchisama/merge-arrays.git
cd merge-arrays
```

Install dependencies:
```bash
npm install
```

Run all tests:
```bash
npm test
```
---

## 📂 Project Structure
```lua
merge-arrays/
│
├── src/
│   ├── merge.ts
│   └── logger.ts
│
├── test/
│   └── merge.test.ts
│
├── jest.config.js
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## ⚙️ Example: merge() Function
### Valid Input
```ts
merge(
  [1, 4, 7],
  [2, 5, 8, 9],
  [10, 6, 3, 0]
);
```
### Output
```csharp
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---
