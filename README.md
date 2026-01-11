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

## 🐳 Run with Docker (Optional)
Build the image:

```bash
docker build -t merge-arrays .
```

Run tests inside Docker:
```bash
docker run --rm merge-arrays
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
├── .dockerignore
├── Dockerfile
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

## ❗ Error Examples
### collection_1 is not ascending
```ts
merge([3, 1, 4], [2, 5], [7, 6]);
```

Error:
```csharp
Error: collection_1 is not sorted ascending.
```
### collection_2 is not ascending
```ts
merge([1, 3], [5, 4], [7, 6]);
```

Error:
```csharp
Error: collection_2 is not sorted ascending.
```

### collection_3 is not descending
```ts
merge([1, 3], [2, 5], [7, 4, 6]);
```

Error:
```csharp
Error: collection_3 is not sorted descending.
```
---

## 🧪 Test Coverage

This project includes unit tests for:

- Normal merge operations
- Empty arrays
- Single-array scenarios
- Negative number handling
- Duplicate values
- Input validation (ascending/descending checks)
- `isAscending()` helper function
- `isDescending()` helper function

Example output:
```csharp
 PASS  test/merge.test.ts
  merge
    ✓ merge normal case
    ✓ collection_1 is not ascending
    ✓ collection_2 is not ascending
    ✓ collection_3 is not descending
    ✓ empty arrays
```

---

## 📄 Optional HTML Test Report
Enable in `jest.config.js`:
```js
reporters: [
  "default",
  [
    "jest-html-reporter",
    {
      pageTitle: "Merge Test Report",
      outputPath: "report.html",
      includeConsoleLog: true
    }
  ]
]
```

A `report.html` file will appear with:
- Test result summary
- Timing information


