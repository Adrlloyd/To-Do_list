const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
loadTasksFromLocalStorage();

function addTask(){
  if(inputBox.value !== ''){
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);
    saveTasksToLocalStorage();
  } else {
    alert("Please add task");
  }
  inputBox.value = '';
  saveTasksToLocalStorage();
}

listContainer.addEventListener("click", function(event){
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
    saveTasksToLocalStorage();
  } else if (event.target.tagName === "BUTTON"){
    event.target.parentElement.remove();
    saveTasksToLocalStorage();
  }
});

function deleteTask(event){
  const task = event.target.parentElement;
  listContainer.removeChild(task);
  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage(){
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadTasksFromLocalStorage(){
  listContainer.innerHTML = localStorage.getItem("tasks");
}