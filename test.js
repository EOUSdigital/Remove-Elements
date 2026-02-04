"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("#section3 .tasks");
    if (!ul) throw new Error("Cannot find #section3 .tasks");

    //  Add a Delete button inside each task item
    ul.querySelectorAll("li.task").forEach((li) => {
        if (li.querySelector("[data-action='delete']")) return;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.dataset.action = "delete";
        btn.textContent = "Delete";

        li.append(" ", btn);
    });

    //  One delegated listener on the UL
    ul.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action='delete']");
        if (!btn) return;

        const taskItem = btn.closest("li.task");
        taskItem?.remove();
    });
});