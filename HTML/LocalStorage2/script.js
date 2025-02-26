document.addEventListener("DOMContentLoaded", function () {
    const entryScreen = document.getElementById("entry-screen");
    const enterBtn = document.getElementById("enter-btn");
    const todoContainer = document.getElementById("todo-container");
    const toggleBtn = document.getElementById("toggle-btn");

    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = ""; // Clear list before rendering
        tasks.forEach((task, index) => {
            const li = document.createElement("li");

            const taskSpan = document.createElement("span");
            taskSpan.textContent = task.text;
            taskSpan.classList.toggle("completed", task.completed);
            taskSpan.addEventListener("click", function () {
                tasks[index].completed = !tasks[index].completed;
                saveTasks();
                renderTasks();
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "X";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", function () {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

            li.appendChild(taskSpan);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    // Add Task Event
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            tasks.push({ text: taskText, completed: false });
            saveTasks();
            renderTasks();
            taskInput.value = "";
        }
    });

    // Show To-Do List on Entry Button Click
    enterBtn.addEventListener("click", function () {
        entryScreen.style.opacity = "0";
        setTimeout(() => {
            entryScreen.style.display = "none";
            todoContainer.classList.remove("hidden");
        }, 1000);
    });

    // Collapse / Expand Functionality
    toggleBtn.addEventListener("click", function () {
        if (todoContainer.style.maxHeight === "50px") {
            todoContainer.style.maxHeight = "500px";
            toggleBtn.textContent = "Collapse";
        } else {
            todoContainer.style.maxHeight = "50px";
            toggleBtn.textContent = "Expand";
        }
    });

    // Initial Render of Saved Tasks
    renderTasks();
});