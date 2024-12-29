// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const currentDate = document.getElementById("current-date");

// Display today's date
const today = new Date();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
currentDate.textContent = `Today is ${today.toLocaleDateString("en-US", options)}`;

// Add a new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${taskText}
    <button class="delete-btn">Delete</button>
  `;

  // Add the new task to the list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";

  // Add delete functionality
  const deleteBtn = listItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });

  // Add "mark as completed" functionality
  listItem.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });
});
