"use strict";

// 🟦 Module 7 - DOM Manipulation: Lesson 14. Remove Elements

//TODO  Concepts you must know

//? 1) Removing vs hiding
//  • Hide: el.style.display = "none" or toggle a class. Elements stays in the DOM.
//  • Remove: Element is detached from the DOM tree entirely. It no longer appears and os no longer in document flow.

//? 2) Tow main ways to remove

//* A. Modern and simplest: element.remove()
//  Removes the element from its parent directly

el.remove();

//* B. Classic: parent.removeChild(child)
//  Useful when you have parent and child:

parent.removeChild(child);

//? 3) What happens after removal
//  • The element is gone from the DOM, but any variable pointing to it still points to the node object (is it now detached).
//  • If you remove an element with children, the whole subtree is removed from the DOM.

//? 4) Events and removal
//  • If you used event delegation (one listener on the parent), removing child elements is safe and clean.
//  • If you attached direct listeners to many child nodes, removing them is still fine, but delegation scales better.

//? 5. Selecting what to remove (common patterns)
//  • Remove the clicked item: e.target.closest("li.task")?.remove()
//  • Remove all matching items: loop through querySelectorAll(...) and call .remove()


//TODO  Remove Elements Task

//  We will use "#section3 .tasks" as the target list.

//? Task 1 - Remove one task (delegated click)

//* Pseudocode
//  1. Select the "ul" for "#section3 .tasks"
//  2. Add one click listener to the "ul"
//  3. If the user clicks a delete button ([data-action="delete"]), remove the closest "li.task"

//* Constraints
//  • Use "one" listener on the "ul"
//  • Use "closest()" to find the button and the task item
//  • Use "element.remove()" (not "removeChild")

//* Tiny hint
//  • Use optional chaining to avoid crashes: taskItem?.remove()

//? Task 2 — Remove all notices in one go

//  (You already have .notice from Lesson 11. If you do not currently create notices in Lesson 14, add 2–3 notices manually in HTML or via JS first.)

//* Pseudocode
//  1. Select all .notice elements
//  2. Loop and remove each one

//* Constraints
//  • Use querySelectorAll(".notice")
//  • Use .forEach(...)
//  • Use .remove()

//* Tiny hint
//  A NodeList supports .forEach.

//? Task 3 - Remove every even task item

//* Pseudocode
//  1. Get all "li.task" inside "#section3 .tasks"
//  2. Remove items at indexes 1, 3, 5, ... (because index starts at 0)

//* Constrains
//  • Do not hardcode task names
//  • Use index - based logic
//  • Use ".remove()"

//* Tiny hint
//  In "forEach((li, i) => . . .)", even positions are i % 2 === 1 if you mean "Task 2, Task 4, ...".


//TODO  Reflection Point

//? Reflection questions (answer in 2–3 sentences)

//* 1) When would you hide an element instead of removing it?
//  Answer: Hiding an element (e.g., using display: none) rather than removing it from the Document Object Model (DOM) is a best practice when the element is expected to be toggled frequently, requires quick re-rendering, or needs to maintain its state (data/event listeners). Removing is generally better for elements that are removed permanently to free up memory.

//* 2) Why does event delegation scale better than adding a listener to every button?
//  Answer: Event delegation is a powerful JavaScript technique that simplifies event handling for dynamic, large-scale DOM structures. Instead of attaching event listeners to individual elements, we attach a single listener to a parent, leveraging event bubbling to handle events efficiently.

//* 3) If you remove a node, what happens to variables that still reference it?
//  Answer: Removing a node from the DOM does not delete any variable attached to it, but it will point to the node object (is it now detached). 

//? Exit ticket (quick check)

//* • What does `element.remove()` do to the DOM?
//  Answer: The Element.remove() method removes the element from its parent node. If it has no parent node, calling remove() does nothing.

//* • Which method removes a child from a parent: `remove()` or `removeChild()`?
//  Answer: The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node. 

//* • In index-based removal, why does Task 2 have index `1`?
//  Answer: The Task has index `1` because Task 1 has index `0`. JavaScript uses zero-based indexing for arrays and collections, meaning the first element is at index 0, the second at 1, and so on. While the 1st item is at index 0, the total count (length) remains 1-based, making the last index always an array.length - 1.


//! Feedback

//  Your answers are strong overall. Below is a precise review with small corrections to make them technically tighter.

//? Reflection questions

//* 1) Hide vs remove

//  ✅ Correct and well explained.
//  Small refinement: hiding does "not" preserve event listeners because they are preserved either way; they remain attached because the node stays in memory and in the DOM. The real advantage is "keeping layout/state and avoiding DOM rebuild cost".

//  A slightly tighter version:
//  • Hide when you plan to show it again soon and want to preserve state (inputs, scroll position, focus) and avoid recreating nodes.
//  • Remove when it is truly gone or you want to reduce DOM size.

//* 2) Why delegation scales better

//  ✅ Correct.
//  If you want one extra “why”: it works even for elements added later (dynamic content) without registering new listeners.

//* 3) Variables referencing a removed node

//  ✅ Correct concept.
//  Just tighten the wording:
//  • The variable still references the same Node object, but it is "detached" (not in the document). It will only be garbage-collected if nothing references it anymore.

//? Exit ticket

// • What does `element.remove()` do?
//  ✅ Correct.

// • `remove()` vs `removeChild()`
//  ✅ Correct.
//  Minor note: `remove()` is called on the child itself; `removeChild()` is called on the parent and returns the removed node.

//  • Why Task 2 has index 1
//  ✅ Correct.
//  One simplification: you do not need the “length remains 1-based” part; `length` is just a count, and the last index is `length - 1`.

//? Overall
//  You understand Lesson 14’s concepts accurately. The only changes I recommend are "wording/precision", not logic.


