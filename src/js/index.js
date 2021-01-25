import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

//////////// Selectors
const taskInput = document.querySelector(".todo-input");
const taskButton = document.querySelector(".todo-button");
const taskList = document.querySelector(".todo-list");

///////////// Event Listeners

taskButton.addEventListener("click", addTask);

///////////// Functions

function addTask(event) {
    event.preventDefault();
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("todo-section__div");
    const newTask = document.createElement('li');
    newTask.innerText = 'Task';
    newTask.classList.add('todo-item');
    taskDiv.appendChild(newTask);

    ////////// Completed button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<img src="../assets/img/button-unchecked.svg">';
    completedButton.classList.add("complete-btn");
    taskDiv.appendChild(completedButton);

    ////////// Delete button

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<img src="../assets/img/trash.svg">';
    deleteButton.classList.add("complete-btn");
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);

}

