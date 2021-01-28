import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

//////////// Selectors
const taskInput = document.querySelector(".todoInput");
const taskButton = document.querySelector(".todoButton");
const taskList = document.querySelector(".todoList");

///////////// Event Listeners

taskButton.addEventListener("click", addTask);

///////////// Functions

function addTask(event) {
    event.preventDefault();
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskSection__div");
    const newTask = document.createElement('li');
    newTask.innerText = 'Task';
    newTask.classList.add('taskItem');
    taskDiv.appendChild(newTask);

    ////////// Completed button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<img src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/button-unchecked.svg">';
    completedButton.classList.add("completeButton");
    taskDiv.appendChild(completedButton);

    ////////// Delete button

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<img src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
    deleteButton.classList.add("completeButton");
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);

}

