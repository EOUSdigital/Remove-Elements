"use strict";

// 🟦 Module 7 - DOM Manipulation: Lesson 14. Remove Elements

//TODO  Remove Elements Task

//  We will use "#section3 .tasks" as the target list.

//? Task 1 - Remove one task (delegated click)

const ul = document.querySelector("#section3 .tasks");
if (!ul) throw new Error("Cannot find #section3 .tasks");

ul.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='delete']");
    if (!btn) return;

    const taskItem = btn.closest("li.task");
    taskItem?.remove();
});


//? Task 2 — Remove all notices in one go

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".notice").forEach((el) => el.remove());
});


//? Task 3 - Remove every even task item

window.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("#section3 .tasks");
    if (!ul) throw new Error("Cannot find #section3 .tasks");

    const tasks = ul.querySelectorAll("li.task");

    tasks.forEach((li, i) => {
        if (i % 2 === 1) li.remove();
    });

});


