import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

//////////// Selectors
const taskInput = document.querySelector(".taskInput");
const taskButton = document.querySelector(".taskButton");
const taskList = document.querySelector(".taskList");
const taskFilter = document.querySelector(".filter--task");

///////////// Event Listeners

document.addEventListener("DOMContentLoaded", getTask);
document.addEventListener("DOMContentLoaded", filterTask);
taskButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", completeTask);
taskFilter.addEventListener("click", filterTask);

///////////// Functions

function addTask(event) {
  event.preventDefault();
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("taskSection__div");
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  newTask.classList.add("taskItem");
  taskDiv.appendChild(newTask);

  ////////// Completed button
  const completedButton = document.createElement("button");
  completedButton.innerHTML =
    '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
  completedButton.classList.add("completeButton");
  taskDiv.appendChild(completedButton);

  ////////// Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML =
    '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
  deleteButton.classList.add("deleteButton");
  taskDiv.appendChild(deleteButton);

  ////////// Add div to list
  taskList.appendChild(taskDiv);

  ////////// Add tasks to Local Storage
  saveTasksInLocalStorage(taskInput.value);

  ///////// Clear input
  taskInput.value = "";
}

function deleteTask(e) {
  const item = e.target;
  if (item.classList[0] === "deleteButton") {
    const task = item.parentElement;
    removeTasksFromLocalStorage(task);
    task.remove();
  }
}

function completeTask(e) {
  const item = e.target;
  if (item.classList[0] === "completeButton") {
    const task = item.parentElement;
    task.classList.toggle("completed");
  }
}

// function filterTask(e){
//     const tasks = taskList.childNodes;
//     console.log(tasks);
//     tasks.forEach(function(task){
//         console.log(typeof task);
//         switch(e.target.value){
//             case "todo":
//                 console.log(task.style.display);
//                 if(task.classList === "completed"){
//                     task.style.display = "none";
//                 } else {
//                     task.style.display = "flex";
//                 };
//                 break;
//             case "done":
//                 if(task.classList === "completed"){
//                     task.style.display = "flex";
//                 } else {
//                     task.style.display = "none";
//                 };
//                 break;
//         };
//     });
// };

function filterTask(e) {
  const tasks = taskList.childNodes;
  console.log(tasks);
  for (let i = 1; i < tasks.length; i++) {
    const task = tasks[i];
    function filterByValue() {
      switch (e.target.value) {
        case "todo":
          if (task.classList.contains("completed")) {
            task.style.display = "none";
          } else {
            task.style.display = "flex";
          }
          break;
        case "done":
          if (task.classList.contains("completed")) {
            task.style.display = "flex";
          } else {
            task.style.display = "none";
          }
          break;
      }
    }
    filterByValue();
  }
}

function saveTasksInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function getTask() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskSection__div");
    const newTask = document.createElement("li");
    newTask.innerText = task;
    newTask.classList.add("taskItem");
    taskDiv.appendChild(newTask);

    ////////// Completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML =
      '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
    completedButton.classList.add("completeButton");
    taskDiv.appendChild(completedButton);

    ////////// Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML =
      '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
    deleteButton.classList.add("deleteButton");
    taskDiv.appendChild(deleteButton);

    ////////// Add div to list
    taskList.appendChild(taskDiv);
  });
};

function removeTasksFromLocalStorage(task){
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  const taskIndex = task.children[0].innerText;
  tasks.splice(tasks.indexOf(taskIndex), 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
