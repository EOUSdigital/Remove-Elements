"use strict";

//? Task 1 - Remove one task (delegated click)

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

//? Task 2 — Remove all notices in one go

window.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("#section3 .tasks");
    if (!ul) return;

    ["Notice A", "Notice B", "Notice C"].forEach((text) => {
        const li = document.createElement("li");
        li.className = "notice";
        li.textContent = text;
        ul.append(li);
    });

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove al notices";
    ul.insertAdjacentElement("beforebegin", removeBtn)

    removeBtn.addEventListener("click", () => {
        document.querySelectorAll(".notice").forEach((el) => el.remove());
    });
});