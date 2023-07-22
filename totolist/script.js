document.addEventListener("DOMContentLoaded", function() {
  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");

  addButton.addEventListener("click", function() {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
      `;
      todoList.appendChild(listItem);
      todoInput.value = "";
    }
  });

  todoList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
      const listItem = event.target.parentElement;
      todoList.removeChild(listItem);
    }
  });

  todoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addButton.click();
    }
  });
});
