import "../scss/main.scss";

//////////////// Import SWIPERJS

import Swiper from "swiper/bundle";

// init Swiper:

////

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

//////////// Selectors
const taskInput = document.querySelector(".taskInput");
const taskButton = document.querySelector(".taskButton");
const taskList = document.querySelector(".taskList");
const taskFilter = document.querySelector(".filter--task");
const spanWord = document.querySelector(".change--word");
const buttonAddTask = document.querySelector(".addTask--js");
const addTaskSection = document.querySelector(".addTaskSection--js");
const workCategorySection = document.querySelector(".workCategorySection--js");
const personalCategorySection = document.querySelector(
  ".personalCategorySection--js"
);
const learningCategorySection = document.querySelector(
  ".learningCategorySection--js"
);
const buttonBack = document.querySelector(".buttonBack--js");
const buttonBackWork = document.querySelector(".buttonBackWork--js");
const buttonBackPersonal = document.querySelector(".buttonBackPersonal--js");
const buttonBackLearning = document.querySelector(".buttonBackLearning--js");
const mainSection = document.querySelector(".main--js");
const workButton = document.querySelector(".categoryWork--js");
const personalButton = document.querySelector(".categoryPersonal--js");
const learningButton = document.querySelector(".categoryLearning--js");
const categoryDiv = document.querySelector(".categoryDiv--js");

const workList = document.querySelector(".workTask--js");
  const personalList = document.querySelector(".personalTask--js");
  const learningList = document.querySelector(".learningTask--js");

const time = new Date().toLocaleTimeString().slice(0, 2);

///////////// Event Listeners

document.addEventListener("DOMContentLoaded", getWorkTask);
document.addEventListener("DOMContentLoaded", getPersonalTask);
document.addEventListener("DOMContentLoaded", getLearningTask);
taskButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", completeTask);
// taskFilter.addEventListener("click", filterTask);
buttonAddTask.addEventListener("click", openSectionCreateTask);
buttonBack.addEventListener("click", closeSectionCreateTask);
workButton.addEventListener("click", openSectionWorkCategory);
buttonBackWork.addEventListener("click", closeSectionWorkCategory);
buttonBackPersonal.addEventListener("click", closeSectionPersonalCategory);
buttonBackLearning.addEventListener("click", closeSectionLearningCategory);
personalButton.addEventListener("click", openSectionPersonalCategory);
learningButton.addEventListener("click", openSectionLearningCategory);

changeWord();

///////////// Functions

function addTask(event) {
  event.preventDefault();
  const typeTaskInput = document.querySelector(".typeTaskSelect--js");
  const categorySelect = document.querySelector(".categoryTask--js");
  console.log(typeTaskInput.value);
  const taskDiv = document.createElement("div");
  const completedButton = document.createElement("button");
  const newTask = document.createElement("li");
  const deleteButton = document.createElement("button");
  switch (categorySelect.value) {
    case "work":
      taskDiv.classList.add("priorityTask__div");
      ////////// Completed button
      completedButton.innerHTML =
        '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
      completedButton.classList.add("completeButton");
      taskDiv.appendChild(completedButton);

      newTask.innerText = taskInput.value;
      newTask.classList.add("taskItem");
      taskDiv.appendChild(newTask);

      //////// Delete button
      deleteButton.innerHTML =
        '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
      deleteButton.classList.add("deleteButton");
      taskDiv.appendChild(deleteButton);

      ////////// Add div to list
      workList.appendChild(taskDiv);

      saveWorkInLocalStorage(taskInput.value);

      break;
    case "personal":
      taskDiv.classList.add("priorityTask__div");
      ////////// Completed button
      completedButton.innerHTML =
        '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
      completedButton.classList.add("completeButton");
      taskDiv.appendChild(completedButton);

      newTask.innerText = taskInput.value;
      newTask.classList.add("taskItem");
      taskDiv.appendChild(newTask);

      //////// Delete button
      deleteButton.innerHTML =
        '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
      deleteButton.classList.add("deleteButton");
      taskDiv.appendChild(deleteButton);

      ////////// Add div to list
      personalList.appendChild(taskDiv);

      savePersonalInLocalStorage(taskInput.value);
      break;
    case "learning":
      taskDiv.classList.add("priorityTask__div");
      ////////// Completed button
      completedButton.innerHTML =
        '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
      completedButton.classList.add("completeButton");
      taskDiv.appendChild(completedButton);

      newTask.innerText = taskInput.value;
      newTask.classList.add("taskItem");
      taskDiv.appendChild(newTask);

      //////// Delete button
      deleteButton.innerHTML =
        '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
      deleteButton.classList.add("deleteButton");
      taskDiv.appendChild(deleteButton);

      ////////// Add div to list
      learningList.appendChild(taskDiv);

      saveLearningInLocalStorage(taskInput.value);
      break;
  }
}

// const tasks = taskList.childNodes;
// console.log(tasks);
// for (let i = 1; i < tasks.length; i++) {
//   const task = tasks[i];
//   function filterByValue() {
//     switch (e.target.value) {
//       case "todo":
//         if (task.classList.contains("completed")) {
//           task.style.display = "none";
//         } else {
//           task.style.display = "flex";
//         }
//         break;
//       case "done":
//         if (task.classList.contains("completed")) {
//           task.style.display = "flex";
//         } else {
//           task.style.display = "none";
//         }
//         break;
//     }
//   }
// }

// function addTask(event) {
//   event.preventDefault();
//   const tasks = categoryDiv.childNodes;
//   console.log(tasks);
//   tasks.forEach(function (task) {
//     console.log(typeof task);
//     const taskDiv = document.createElement("div");
//     const completedButton = document.createElement("button");
//     const newTask = document.createElement("li");
//     const deleteButton = document.createElement("button");
//     console.log(event.target.value);
//   switch (event.target.value) {
//     case "work":
//       taskDiv.classList.add("priorityTask__div");
//       ////////// Completed button
//       completedButton.innerHTML =
//         '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
//       completedButton.classList.add("completeButton");
//       taskDiv.appendChild(completedButton);

//       newTask.innerText = taskInput.value;
//       newTask.classList.add("taskItem");
//       taskDiv.appendChild(newTask);

//       //////// Delete button
//       deleteButton.innerHTML =
//         '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
//       deleteButton.classList.add("deleteButton");
//       taskDiv.appendChild(deleteButton);

//       ////////// Add div to list
//       taskList.appendChild(taskDiv);
//       break;
//     case "personal":
//       taskDiv.classList.add("priorityTask__div");
//       ////////// Completed button
//       completedButton.innerHTML =
//         '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
//       completedButton.classList.add("completeButton");
//       taskDiv.appendChild(completedButton);

//       newTask.innerText = taskInput.value;
//       newTask.classList.add("taskItem");
//       taskDiv.appendChild(newTask);

//       //////// Delete button
//       deleteButton.innerHTML =
//         '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
//       deleteButton.classList.add("deleteButton");
//       taskDiv.appendChild(deleteButton);

//       ////////// Add div to list
//       taskList.appendChild(taskDiv);
//       break;
//     case "learning":
//       taskDiv.classList.add("priorityTask__div");
//       ////////// Completed button
//       completedButton.innerHTML =
//         '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
//       completedButton.classList.add("completeButton");
//       taskDiv.appendChild(completedButton);

//       newTask.innerText = taskInput.value;
//       newTask.classList.add("taskItem");
//       taskDiv.appendChild(newTask);

//       //////// Delete button
//       deleteButton.innerHTML =
//         '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
//       deleteButton.classList.add("deleteButton");
//       taskDiv.appendChild(deleteButton);

//       ////////// Add div to list
//       taskList.appendChild(taskDiv);
//       break;
//   }
// });

//   ////////// Add tasks to Local Storage
//   saveTasksInLocalStorage(taskInput.value);

//   ///////// Clear input
//   taskInput.value = "";

//   closeSectionCreateTask();
// }

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
//     const tasks = categoryDiv.childNodes;
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
}

function saveWorkInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("work") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("work"));
  }
  tasks.push(task);
  localStorage.setItem("work", JSON.stringify(tasks));
}


function savePersonalInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("personal") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("personal"));
  }
  tasks.push(task);
  localStorage.setItem("personal", JSON.stringify(tasks));
}

function saveLearningInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("learning") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("learning"));
  }
  tasks.push(task);
  localStorage.setItem("learning", JSON.stringify(tasks));
}


function getWorkTask() {
  let tasks;
  if (localStorage.getItem("work") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("work"));
  }
  tasks.forEach(function (task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("priorityTask__div");
    ////////// Completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML =
      '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
    completedButton.classList.add("completeButton");
    taskDiv.appendChild(completedButton);
    ///////// Create & add list to div
    const newTask = document.createElement("li");
    newTask.innerText = task;
    newTask.classList.add("taskItem");
    taskDiv.appendChild(newTask);

    //////// Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML =
      '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
    deleteButton.classList.add("deleteButton");
    taskDiv.appendChild(deleteButton);

    ////////// Add div to list
    workList.appendChild(taskDiv);
  });
}


function getPersonalTask() {
  let tasks;
  if (localStorage.getItem("personal") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("personal"));
  }
  tasks.forEach(function (task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("priorityTask__div");
    ////////// Completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML =
      '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
    completedButton.classList.add("completeButton");
    taskDiv.appendChild(completedButton);
    ///////// Create & add list to div
    const newTask = document.createElement("li");
    newTask.innerText = task;
    newTask.classList.add("taskItem");
    taskDiv.appendChild(newTask);

    //////// Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML =
      '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
    deleteButton.classList.add("deleteButton");
    taskDiv.appendChild(deleteButton);

    ////////// Add div to list
    personalList.appendChild(taskDiv);
  });
}

function getLearningTask() {
  let tasks;
  if (localStorage.getItem("learning") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("learning"));
  }
  tasks.forEach(function (task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("priorityTask__div");
    ////////// Completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML =
      '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
    completedButton.classList.add("completeButton");
    taskDiv.appendChild(completedButton);
    ///////// Create & add list to div
    const newTask = document.createElement("li");
    newTask.innerText = task;
    newTask.classList.add("taskItem");
    taskDiv.appendChild(newTask);

    //////// Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML =
      '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
    deleteButton.classList.add("deleteButton");
    taskDiv.appendChild(deleteButton);

    ////////// Add div to list
    learningList.appendChild(taskDiv);
  });
}

function removeTasksFromLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  const taskIndex = task.children[0].innerText;
  tasks.splice(tasks.indexOf(taskIndex), 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function changeWord() {
  if (time >= 6 && time < 12) {
    spanWord.innerHTML = "morning";
  } else if (time >= 12 && time < 18) {
    spanWord.innerHTML = "afternoon";
  } else if (time >= 18 && time < 24) {
    spanWord.innerHTML = "evening";
  } else if (time >= 0 && time < 6) {
    spanWord.innerHTML = "night";
  }
}

function openSectionCreateTask() {
  addTaskSection.classList.add("open-section");
  mainSection.style.display = "none";
}

function closeSectionCreateTask() {
  addTaskSection.classList.remove("open-section");
  mainSection.style.display = "flex";
}

function openSectionWorkCategory() {
  workCategorySection.classList.add("open-section");
  mainSection.style.display = "none";
}

function closeSectionWorkCategory() {
  workCategorySection.classList.remove("open-section");
  mainSection.style.display = "flex";
}

function openSectionPersonalCategory() {
  personalCategorySection.classList.add("open-section");
  mainSection.style.display = "none";
}

function closeSectionPersonalCategory() {
  personalCategorySection.classList.remove("open-section");
  mainSection.style.display = "flex";
}

function openSectionLearningCategory() {
  learningCategorySection.classList.add("open-section");
  mainSection.style.display = "none";
}

function closeSectionLearningCategory() {
  learningCategorySection.classList.remove("open-section");
  mainSection.style.display = "flex";
}

//// Init SwiperJS

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1.8,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
