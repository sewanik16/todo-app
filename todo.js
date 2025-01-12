console.log("Nikhil rathod");
let totalTaskElement = document.querySelector("#total-task");
let inputTextElement = document.querySelector("#input-text");
//let todoArray = JSON.parse(localStorage.getItem("todolist"));
let todoArray = [];
displayTodolist();
console.log("Github running");
let dueDateElement = document.querySelector("#due-date");
dueDateElement.innerText = `| Due Date : ${new Date()
  .toDateString()
  .substring(0, 10)} (Today)`;

inputTextElement.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    handleAdd();
  }
});
function handleAdd() {
  let inputValue = inputTextElement.value;
  if (inputValue == "") return;
  if (editIndex != -1) {
    todoArray.splice(editIndex, 1, inputValue);
  } else {
    todoArray.push(inputValue);
  }
  //localStorage.setItem("todolist", JSON.stringify(todoArray));
  displayTodolist();
  inputTextElement.focus();
}
function handleClear() {
  todoArray = [];
  if (confirm("Are you sure you want to delete all tasks") == true)
    displayTodolist();
}
let editIndex = -1;
let deleteIndex = -1;
function handleEdit(index) {
  inputTextElement.value = todoArray[index];
  editIndex = index;
  inputTextElement.focus();
}
function handleDelete(index) {
  todoArray.splice(index, 1);
  //localStorage.setItem("todolist", JSON.stringify(todoArray));
  displayTodolist();
}
function displayTodolist() {
  let newHTML = "";
  let divElement = document.querySelector(".todo-list");
  divElement.innerHTML = "";
  console.log(todoArray);
  console.log(typeof todoArray);
  todoArray.forEach((task, index) => {
    newHTML = `<div class="task">
           <p>${task}</p>
           <button class="btn edit-btn" onclick="handleEdit(${index})">Edit</button>
           <button class="btn delete-btn" onclick="handleDelete(${index})">Delete</button>
           </div>`;
    divElement.innerHTML += newHTML;
  });
  inputTextElement.value = "";
  totalTaskElement.innerText = `Total : ${todoArray.length} Tasks`;
}

// for (let i = 0; i < todoArray.length; i++) {
//   newHTML = `<div class="task">
//         <p>${todoArray[i]}</p>
//         <button class="btn edit-btn">Edit</button>
//         <button class="btn delete-btn">Delete</button>
//       </div>`;
//   divElement.innerHTML += newHTML;
//   inputTextElement.value = "";
// }
