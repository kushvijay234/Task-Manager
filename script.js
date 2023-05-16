// Get DOM elements
const addTaskBtn = document.getElementById("add-task-btn");
const taskPopup = document.getElementById("task-popup");
const closeBtn = document.getElementsByClassName("close")[0];
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const descriptionInput = document.getElementById("description-input");
const taskList = document.getElementById("task-list");

// Open the task popup
addTaskBtn.addEventListener("click", () => {
  taskPopup.style.display = "block";
});

// Close the task popup
closeBtn.addEventListener("click", () => {
  taskPopup.style.display = "none";
});

// Add task event listener
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = taskInput.value;
  const taskDate = dateInput.value;
  const taskTime = timeInput.value;
  const taskDescription = descriptionInput.value;
  if (taskText.trim() !== "") {
    const task = {
      text: taskText,
      date: taskDate,
      time: taskTime,
      description: taskDescription,
    };
    addTask(task);
    taskInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
    descriptionInput.value = "";
    taskPopup.style.display = "none";
  }
});

// Add task
function addTask(task) {
  // Create list item
  const li = document.createElement("li");

  // Create task content
  const taskContent = document.createElement("div");
  taskContent.innerHTML = `
  <h3>${task.text}</h3>
  <p>Date: ${task.date}</p>
  <p>Time: ${task.time}</p>
  <p>Description: ${task.description}</p>
`;
  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete";

  // Append task content and delete button to list item
  li.appendChild(taskContent);
  li.appendChild(deleteButton);

  // Append list item to task list
  taskList.appendChild(li);

  // Delete task event listener
  deleteButton.addEventListener("click", function () {
    li.remove();
  });
}
