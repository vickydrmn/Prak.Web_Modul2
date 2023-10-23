const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span><button class="delete"><i class="fas fa-trash-alt"></i></button><button class="edit"><i class="fas fa-edit"></i></button>`;
    taskList.appendChild(li);

    const deleteButton = li.querySelector(".delete");
    deleteButton.addEventListener("click", deleteTask);

    const editButton = li.querySelector(".edit");
    editButton.addEventListener("click", editTask);

    taskInput.value = "";
  }
}

function deleteTask() {
  this.parentElement.remove();
}

function editTask() {
  const taskText = this.parentElement.querySelector("span").innerText;
  const updatedTaskText = prompt("Edit tugas:", taskText);
  if (updatedTaskText !== null) {
    this.parentElement.querySelector("span").innerText = updatedTaskText;
  }
}
