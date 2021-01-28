import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

//////////// Selectors
const taskInput = document.querySelector(".taskInput");
const taskButton = document.querySelector(".taskButton");
const taskList = document.querySelector(".taskList");

///////////// Event Listeners

taskButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", completeTask);


///////////// Functions

function addTask(event) {
    event.preventDefault();
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskSection__div");
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('taskItem');
    taskDiv.appendChild(newTask);

    ////////// Completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
    completedButton.classList.add("completeButton");
    taskDiv.appendChild(completedButton);

    ////////// Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
    deleteButton.classList.add("deleteButton");
    taskDiv.appendChild(deleteButton);

    ////////// Add div to list
    taskList.appendChild(taskDiv);

    ///////// Clear input
    taskInput.value = '';

};

function deleteTask(e){
    const item = e.target;
    if (item.classList[0] === "deleteButton") {
        const task = item.parentElement;
        task.remove();
    };
};

function completeTask(e){
    const item = e.target;
    if (item.classList[0] === "completeButton") {
        const task = item.parentElement;
        task.classList.toggle("completed");
    };
};
