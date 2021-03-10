/////////////////////////////////////////////////////// Imports //////////////////////////////////////////////////////////////////
import "../scss/main.scss";

//////////////// Import SWIPERJS

import Swiper from "swiper/bundle";

// init Swiper:

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

////////////////////////////////////////////////////////// Selectors ////////////////////////////////////////////////////////////////

const taskInput = document.querySelector(".taskInput");
const taskButton = document.querySelector(".taskButton");
const taskList = document.querySelector(".taskList");
//
const spanWord = document.querySelector(".change--word");
//
const buttonAddTask = document.querySelector(".addTask--js");
const addTaskSection = document.querySelector(".addTaskSection--js");
//
const workCategorySection = document.querySelector(".workCategorySection--js");
const personalCategorySection = document.querySelector(
  ".personalCategorySection--js"
);
const learningCategorySection = document.querySelector(
  ".learningCategorySection--js"
);
//
const buttonBack = document.querySelector(".buttonBack--js");
const buttonBackWork = document.querySelector(".buttonBackWork--js");
const buttonBackPersonal = document.querySelector(".buttonBackPersonal--js");
const buttonBackLearning = document.querySelector(".buttonBackLearning--js");
//
const mainSection = document.querySelector(".main--js");
//
const workButton = document.querySelector(".categoryWork--js");
const personalButton = document.querySelector(".categoryPersonal--js");
const learningButton = document.querySelector(".categoryLearning--js");
//
const time = new Date().toLocaleTimeString().slice(0, 2);
const workList = document.querySelector(".workTask--js");
const personalList = document.querySelector(".personalTask--js");
const learningList = document.querySelector(".learningTask--js");

const work = "work";
const personal = "personal";
const learning = "learning";
const priority = "priority";

const numberTasksWork = document.querySelector(".numberOfTaskWork--js");
const numberTasksPersonal = document.querySelector(".numberOfTaskPersonal--js");
const numberTasksLearning = document.querySelector(".numberOfTaskLearning--js");

const typeTaskInput = document.querySelector(".typeTaskSelect--js");
const categorySelect = document.querySelector(".categoryTask--js");

const hamburgerButton = document.querySelector(".hamburger--js");
const menuProfile = document.querySelector(".menuProfile--js");
const opacityDiv = document.querySelector(".opacityDiv--js");

const welcomeSection = document.querySelector(".welcomeSection--js");

//////////////////////////////////////// WELCOME SECTION /////////////////////////////////////////////////////////////////////

const firstPage = document.querySelector(".firstPage--js");
const secondPage = document.querySelector(".secondPage--js");
const thirdPage = document.querySelector(".thirdPage--js");
const fourthPage = document.querySelector(".fourthPage--js");

const firstNextButton = document.querySelector(".firstNext--js");

const secondBackButton = document.querySelector(".secondBack--js");
const secondNextButton = document.querySelector(".secondNext--js");

const thirdBackButton = document.querySelector(".thirdBack--js");
const thirdNextButton = document.querySelector(".thirdNext--js");

const fourthBackButton = document.querySelector(".fourthBack--js");
const fourthNextButton = document.querySelector(".fourthNext--js");

function openWelcomePage(section, current) {
  section.classList.add("open-section");
  current.classList.remove("open-section");
}

firstNextButton.addEventListener("click", openWelcomePage.bind(event, secondPage, firstPage));

secondBackButton.addEventListener("click", openWelcomePage.bind(event, firstPage, secondPage));
secondNextButton.addEventListener("click", openWelcomePage.bind(event, thirdPage, secondPage));

thirdBackButton.addEventListener("click", openWelcomePage.bind(event, secondPage, thirdPage));
thirdNextButton.addEventListener("click", openWelcomePage.bind(event, fourthPage, thirdPage));

fourthBackButton.addEventListener("click", openWelcomePage.bind(event, thirdPage, fourthPage));
fourthNextButton.addEventListener("click", saveLocalStorageWelcome);

/////////////////////////////////////////////////////// Event Listeners  ////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", getWorkTask);
document.addEventListener("DOMContentLoaded", getPersonalTask);
document.addEventListener("DOMContentLoaded", getLearningTask);
document.addEventListener("DOMContentLoaded", getPriorityTask);
document.addEventListener("DOMContentLoaded", getLocalStorageWelcome);

document.addEventListener("DOMContentLoaded", changeWord);
document.addEventListener("DOMContentLoaded", welcome);

document.addEventListener(
  "DOMContentLoaded",
  numberOfTask.bind(event, workList, numberTasksWork)
);
document.addEventListener(
  "DOMContentLoaded",
  numberOfTask.bind(event, personalList, numberTasksPersonal)
);
document.addEventListener(
  "DOMContentLoaded",
  numberOfTask.bind(event, learningList, numberTasksLearning)
);


taskButton.addEventListener("click", addTask);
// taskList.addEventListener("click", deleteTask.bind(event, priority, work));
// taskList.addEventListener("click", deleteTask.bind(event, priority, personal));
// taskList.addEventListener("click", deleteTask.bind(event, priority, learning));
taskList.addEventListener("click", completeTask);

workList.addEventListener("click", deleteTask.bind(event, work));
personalList.addEventListener("click", deleteTask.bind(event, personal));
learningList.addEventListener("click", deleteTask.bind(event, learning));

workList.addEventListener("click", completeTask);
personalList.addEventListener("click", completeTask);
learningList.addEventListener("click", completeTask);

hamburgerButton.addEventListener("click", openMenuProfile);

/// Button open and close section ///

buttonAddTask.addEventListener(
  "click",
  openSection.bind(event, addTaskSection)
);
buttonBack.addEventListener("click", closeSection.bind(event, addTaskSection));

workButton.addEventListener(
  "click",
  openSection.bind(event, workCategorySection)
);
buttonBackWork.addEventListener(
  "click",
  closeSection.bind(event, workCategorySection)
);

personalButton.addEventListener(
  "click",
  openSection.bind(event, personalCategorySection)
);
buttonBackPersonal.addEventListener(
  "click",
  closeSection.bind(event, personalCategorySection)
);

learningButton.addEventListener(
  "click",
  openSection.bind(event, learningCategorySection)
);
buttonBackLearning.addEventListener(
  "click",
  closeSection.bind(event, learningCategorySection)
);

///////////////////////////////////////////////////////// Functions //////////////////////////////////////////////////////////////////////////////////////////////////////

function openMenuProfile() {
  menuProfile.classList.toggle("open-section");
  hamburgerButton.classList.toggle("is-active");
  opacityDiv.classList.toggle("open-section");
}

function numberOfTask(categoryList, categoryName) {
  let tasksCategory = categoryList.childNodes;
  let numberOfTask = tasksCategory.length;
  categoryName.innerHTML = numberOfTask;
}

function addTask(event) {
  event.preventDefault();
  const workList = document.querySelector(".workTask--js");
  const personalList = document.querySelector(".personalTask--js");
  const learningList = document.querySelector(".learningTask--js");
  console.log(typeTaskInput.value);
  switch (typeTaskInput.value) {
    case "priority":
      switch (categorySelect.value) {
        case "work":
          createTask(taskList, taskInput.value);
          createTask(workList, taskInput.value);
          saveTasksInLocalStorage(taskInput.value, work);
          saveTasksInLocalStorage(taskInput.value, priority);
          closeSection(addTaskSection);

          break;
        case "personal":
          createTask(taskList, taskInput.value);
          createTask(personalList, taskInput.value);
          saveTasksInLocalStorage(taskInput.value, personal);
          saveTasksInLocalStorage(taskInput.value, priority);
          closeSection(addTaskSection);
          break;
        case "learning":
          createTask(taskList, taskInput.value);
          createTask(learningList, taskInput.value);
          saveTasksInLocalStorage(taskInput.value, learning);
          saveTasksInLocalStorage(taskInput.value, priority);
          closeSection(addTaskSection);
          break;
      }
      break;
    case "normal":
      switch (categorySelect.value) {
        case "work":
          createTask(workList, taskInput.value);
          saveTasksInLocalStorage(taskInput.value, work);
          closeSection(addTaskSection);
          openSection(workCategorySection);
          break;
        case "personal":
          createTask(personalList, taskInput.value);
          saveTasksInLocalStorage(taskInput.value, personal);
          closeSection(addTaskSection);
          openSection(personalCategorySection);
          break;
        case "learning":
          createTask(learningList, taskInput.value);
          saveTasksInLocalStorage(taskInput.value, learning);
          closeSection(addTaskSection);
          openSection(learningCategorySection);
          break;
      }
      break;
  }
  taskInput.value = "";
  numberOfTask(workList, numberTasksWork);
  numberOfTask(personalList, numberTasksPersonal);
  numberOfTask(learningList, numberTasksLearning);
}

function deleteTask(name, category, e) {
  const item = e.target;
  if (item.classList[0] === "deleteButton") {
    const task = item.parentElement;
    removeTasksFromLocalStorage(task, name);
    task.remove();
    if (name === "priority") {
      removeTasksFromLocalStorage(task, category);
    } else {
      console.log("AUUUUUUUUUUU");
    }
    numberOfTask(workList, numberTasksWork);
    numberOfTask(personalList, numberTasksPersonal);
    numberOfTask(learningList, numberTasksLearning);
  }
}

function completeTask(e) {
  const item = e.target;
  if (item.classList[0] === "completeButton") {
    const task = item.parentElement;
    task.classList.toggle("completed");
  }
}

// function filterTask(e) {
//   const tasks = taskList.childNodes;
//   console.log(tasks);
//   for (let i = 1; i < tasks.length; i++) {
//     const task = tasks[i];
//     function filterByValue() {
//       switch (e.target.value) {
//         case "todo":
//           if (task.classList.contains("completed")) {
//             task.style.display = "none";
//           } else {
//             task.style.display = "flex";
//           }
//           break;
//         case "done":
//           if (task.classList.contains("completed")) {
//             task.style.display = "flex";
//           } else {
//             task.style.display = "none";
//           }
//           break;
//       }
//     }
//     filterByValue();
//   }
// }

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

function openSection(section) {
  section.classList.add("open-section");
  mainSection.style.display = "none";
}

function closeSection(section) {
  section.classList.remove("open-section");
  mainSection.style.display = "flex";
}

function createTask(list, value) {
  const taskDiv = document.createElement("div");
  const completedButton = document.createElement("button");
  const newTask = document.createElement("li");
  const deleteButton = document.createElement("button");
  taskDiv.classList.add("priorityTask__div");
  ////////// Completed button
  completedButton.innerHTML =
    '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
  completedButton.classList.add("completeButton");
  taskDiv.appendChild(completedButton);

  newTask.innerText = value;
  newTask.classList.add("taskItem");
  taskDiv.appendChild(newTask);

  //////// Delete button
  deleteButton.innerHTML =
    '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
  deleteButton.classList.add("deleteButton");
  taskDiv.appendChild(deleteButton);

  ////////// Add div to list
  list.appendChild(taskDiv);

  // if (typeTaskInput.value === "priority" && categorySelect.value === "work"){
  //   taskDiv.classList.add("workPriority");
  // } else if (typeTaskInput.value === "priority" && categorySelect.value === "personal"){
  //   taskDiv.classList.add("personalPriority");
  // } else if (typeTaskInput.value === "priority" && categorySelect.value === "learning"){
  //   taskDiv.classList.add("learningPriority");
  // };
}

function welcome() {
  const key =  localStorage.getItem('welcome');
  if (key == 1){
    console.log("Welcome is false");
    welcomeSection.classList.add("open-section");
    mainSection.style.display = "none";
  } else {
    console.log("Welcome is true");
  }
}

//////////////////////////////////////////////////// LOCAL STORAGE FUNCTION ///////////////////////////////////////////////////////////////////////////////

function saveLocalStorageWelcome() {
  getLocalStorageWelcome();
  localStorage.setItem("welcome", 2);
  welcomeSection.classList.remove("open-section");
  mainSection.style.display = "flex";
}

function getLocalStorageWelcome() {
  let tasks;
  if (localStorage.getItem("welcome") === null) {
    localStorage.setItem("welcome", 1);
  } else {
  }
}

function saveTasksInLocalStorage(task, name) {
  let tasks;
  if (localStorage.getItem(name) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(name));
  }
  tasks.push(task);
  localStorage.setItem(name, JSON.stringify(tasks));
}

function getWorkTask() {
  let tasks;
  if (localStorage.getItem("work") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("work"));
  }
  tasks.forEach(function (task) {
    createTask(workList, task);
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
    createTask(personalList, task);
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
    createTask(learningList, task);
  });
}

function getPriorityTask() {
  let tasks;
  if (localStorage.getItem("priority") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("priority"));
  }
  tasks.forEach(function (task) {
    createTask(taskList, task);
  });
}

function removeTasksFromLocalStorage(task, name) {
  let tasks;
  if (localStorage.getItem(name) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(name));
  }
  const taskIndex = task.children[0].innerText;
  tasks.splice(tasks.indexOf(taskIndex), 1);
  localStorage.setItem(name, JSON.stringify(tasks));
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
