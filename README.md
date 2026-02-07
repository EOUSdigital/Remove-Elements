# 🟦 Module 07 — DOM Manipulation  
## Lesson 14: Remove Elements

This lesson focuses on removing DOM nodes safely and predictably. You will practice removing:
- **One item** via delegated clicks (`closest()` + `.remove()`)
- **Many items** in bulk (remove all matching nodes)
- **Patterned items** (remove Task 2, Task 4, … using index logic)

---

## Reuse from previous lesson

You can reuse the same project structure from Lesson 13:

- `.gitignore` ✅ reuse
- `index.html` ✅ reuse
- `style.css` ✅ reuse (optional: add styles for delete buttons / notices)
- `app.js` 🔁 update for Lesson 14 tasks

---

## Learning goals

By the end of Lesson 14, you should be able to:

- Explain the difference between **hiding** an element and **removing** it
- Remove elements using:
  - `element.remove()` (modern)
  - `parent.removeChild(child)` (classic)
- Use **event delegation** to remove the correct item based on user clicks
- Remove multiple elements using `querySelectorAll(...).forEach(...)`
- Remove items by index pattern (Task 2, Task 4, …)

---

## Core concepts

### 1) Hide vs remove
- **Hide**: element stays in the DOM, but is not visible  
  Example: `el.style.display = "none"` or toggle a class.
- **Remove**: element is detached from the DOM tree entirely  
  Example: `el.remove()`.

### 2) Remove APIs
#### A) Modern: `element.remove()`
```js
el.remove();
```

#### B) Classic: `parent.removeChild(child)`
```js
parent.removeChild(child);
```

Both remove the node from the DOM. The modern version is shorter.

### 3) After removal
- The element disappears from the page and no longer affects layout.
- A variable that points to it still exists, but the node is **detached**.

### 4) Delegated removal (recommended)
Instead of adding many listeners on many buttons, attach **one** listener on the parent container (`ul`) and detect actions with `closest()`.

---

## Task 1 — Remove one task using delegated click

### Goal
Click a delete button inside a task and remove the corresponding `li.task`.

### Recommended pattern (Section 3)
```js
const ul = document.querySelector("#section3 .tasks");
if (!ul) throw new Error("Cannot find #section3 .tasks");

ul.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action='delete']");
  if (!btn) return;

  const taskItem = btn.closest("li.task");
  taskItem?.remove();
});
```

**Important:** Your HTML list items must actually contain a delete button with  
`data-action="delete"` (you can add them in HTML or generate them in JS).

---

## Task 2 — Remove all notices in one go

### Goal
Remove every element matching `.notice`.

```js
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".notice").forEach((el) => el.remove());
});
```

Note: If there are no `.notice` elements on the page, this correctly does nothing.

---

## Task 3 — Remove every even task item (Task 2, Task 4, …)

### Goal
In `#section3 .tasks`, remove Task 2 and Task 4 (and so on) using index logic.

```js
window.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("#section3 .tasks");
  if (!ul) throw new Error("Cannot find #section3 .tasks");

  const tasks = ul.querySelectorAll("li.task");

  tasks.forEach((li, i) => {
    if (i % 2 === 1) li.remove(); // removes Task 2, Task 4, ...
  });
});
```

Expected remaining tasks (if starting with Task 1–4): **Task 1 and Task 3**.

---

## Common mistakes checklist

- Using `querySelector(...)` and then trying to index it with `[1]`  
  ✅ Use `querySelectorAll(...)` if you need indexing.
- Calling `.remove()` on a NodeList  
  ✅ Remove each element: `nodeList.forEach(el => el.remove())`
- Forgetting the `event` parameter (`e`) in `addEventListener("click", (e) => ...)`
- Throwing errors for normal click paths  
  ✅ If the click is not on the delete button, use `return`, not `throw`.

---

## Reflection questions (answer in 2–3 sentences)

1) When would you hide an element instead of removing it?
2) Why does event delegation scale better than adding a listener to every button?
3) If you remove a node, what happens to variables that still reference it?

---

## Exit ticket (quick check)

- What does `element.remove()` do to the DOM?
- Which method removes a child from a parent: `remove()` or `removeChild()`?
- In index-based removal, why does Task 2 have index `1`?

---

## Author and license notice

Source-available (not OSI open source). Personal, educational, and non-commercial research use only. See `LICENSE`.

© 2021–2026 EOUSdigital




