let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") addTask();
});

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    
    taskItem.addEventListener("click", function() {
        this.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = ""; 
}
