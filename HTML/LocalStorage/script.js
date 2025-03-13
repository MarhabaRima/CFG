document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = "";
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

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            tasks.push({ text: taskText, completed: false });
            saveTasks();
            renderTasks();
            taskInput.value = "";
        }
    });

    renderTasks();
});