/////////////////////////////////////////////////////// Imports //////////////////////////////////////////////////////////////////
import "../scss/main.scss";

//////////////// Import SWIPERJS

import Swiper from "swiper/bundle";

import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

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
const normal = "normal";
const workPriority = "workPriority";
const personalPriority = "personalPriority";
const learningPriority = "learningPriority";

const numberTasksWork = document.querySelector(".numberOfTaskWork--js");
const numberTasksPersonal = document.querySelector(".numberOfTaskPersonal--js");
const numberTasksLearning = document.querySelector(".numberOfTaskLearning--js");

const typeTaskInput = document.getElementsByName("typeTask");
let typeTaskInputValue;
const categoryInput = document.getElementsByName("categoryTask");
let categoryInputValue;

const hamburgerButton = document.querySelector(".hamburger--js");
const menuProfile = document.querySelector(".menuProfile--js");
const opacityDiv = document.querySelector(".opacityDiv--js");

const welcomeSection = document.querySelector(".welcomeSection--js");

const spanNick = document.querySelector(".type--nick");

const genders = document.getElementsByName("gender");
let selectedGender;

const menProfile = document.querySelector(".menProfile--js");
const womenProfile = document.querySelector(".womenProfile--js");

const lsPriority = localStorage.getItem("priority");
const lsWork = localStorage.getItem("work");
const lsPersonal = localStorage.getItem("personal");
const lsLearning = localStorage.getItem("learning");

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

firstNextButton.addEventListener(
  "click",
  openWelcomePage.bind(event, secondPage, firstPage)
);

secondBackButton.addEventListener(
  "click",
  openWelcomePage.bind(event, firstPage, secondPage)
);
secondNextButton.addEventListener(
  "click",
  openWelcomePage.bind(event, thirdPage, secondPage)
);

thirdBackButton.addEventListener(
  "click",
  openWelcomePage.bind(event, secondPage, thirdPage)
);
thirdNextButton.addEventListener(
  "click",
  openWelcomePage.bind(event, fourthPage, thirdPage)
);

fourthBackButton.addEventListener(
  "click",
  openWelcomePage.bind(event, thirdPage, fourthPage)
);
fourthNextButton.addEventListener("click", saveLocalStorageWelcome);

/////////////////////////////////////////////////////// Event Listeners  ////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", getLocalStorage);

document.addEventListener("DOMContentLoaded", changeWord);
document.addEventListener("DOMContentLoaded", welcome);
document.addEventListener("DOMContentLoaded", welcomeAlert);

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
taskList.addEventListener("click", deletePriorityTask);
taskList.addEventListener("click", completeTask);

workList.addEventListener("click", deleteTask);
personalList.addEventListener("click", deleteTask);
learningList.addEventListener("click", deleteTask);

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

const normalLabel = document.querySelector(".normalLabel");
const priorityLabel = document.querySelector(".priorityLabel");

const workLabel = document.querySelector(".workLabel");
const personalLabel = document.querySelector(".personalLabel");
const learningLabel = document.querySelector(".learningLabel");

normalLabel.addEventListener("click", changeOpacityTypeTaskLabel);
priorityLabel.addEventListener("click", changeOpacityTypeTaskLabel);

workLabel.addEventListener("click", changeOpacityCategoryLabel);
personalLabel.addEventListener("click", changeOpacityCategoryLabel);
learningLabel.addEventListener("click", changeOpacityCategoryLabel);

const maleLabel = document.querySelector(".maleLabel");
const femaleLabel = document.querySelector(".femaleLabel");

const maleInput = document.querySelector(".maleInput");
const femaleInput = document.querySelector(".femaleInput");

maleLabel.addEventListener("click", changeOpacityGenderLabel);
femaleLabel.addEventListener("click", changeOpacityGenderLabel);

function welcomeAlert() {
  if (localStorage.getItem("welcome" === 2)) {
    let timerInterval;
    Swal.fire({
      title: "Hello !",
      timer: 1500,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  } else {
    console.log("hello");
  }
}

function changeOpacityGenderLabel(e) {
  const item = e.target;
  if (item.classList.contains("checked") === true) {
  } else {
    if (maleInput.checked === true) {
      item.classList.add("checked");
      maleLabel.classList.remove("checked");
    } else if (femaleInput.checked === true) {
      item.classList.add("checked");
      femaleLabel.classList.remove("checked");
    }
  }
}

function changeOpacityTypeTaskLabel(e) {
  const item = e.target;
  const priorityInput = document.querySelector(".priorityInput");
  const normalInput = document.querySelector(".normalInput");
  const priorityLabel = document.querySelector(".priorityLabel");
  const normalLabel = document.querySelector(".normalLabel");
  if (item.classList.contains("checked") === true) {
  } else {
    if (priorityInput.checked === true) {
      item.classList.add("checked");
      priorityLabel.classList.remove("checked");
    } else if (normalInput.checked === true) {
      item.classList.add("checked");
      normalLabel.classList.remove("checked");
    }
  }
}

function changeOpacityCategoryLabel(e) {
  const item = e.target;
  const workInput = document.querySelector(".workInput");
  const personalInput = document.querySelector(".personalInput");
  const learningInput = document.querySelector(".learningInput");

  if (item.classList.contains("checked") === true) {
    console.log("tego nie można, to nie dobra jest");
  } else {
    if (workInput.checked === true) {
      item.classList.add("checked");
      workLabel.classList.remove("checked");
    } else if (personalInput.checked === true) {
      item.classList.add("checked");
      personalLabel.classList.remove("checked");
    } else if (learningInput.checked === true) {
      item.classList.add("checked");
      learningLabel.classList.remove("checked");
    }
  }
}

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
  for (let i = 0; i < typeTaskInput.length; i++) {
    if (typeTaskInput[i].checked) {
      typeTaskInputValue = typeTaskInput[i].value;
    }
  }
  for (let i = 0; i < categoryInput.length; i++) {
    if (categoryInput[i].checked) {
      categoryInputValue = categoryInput[i].value;
    }
  }
  switch (typeTaskInputValue) {
    case "priority":
      switch (categoryInputValue) {
        case "work":
          createTask(taskList, taskInput.value, workPriority);
          createTask(workList, taskInput.value, priority);
          saveTasksInLocalStorage(taskInput.value, work);
          saveTasksInLocalStorage(taskInput.value, priority);
          closeSection(addTaskSection);

          break;
        case "personal":
          createTask(taskList, taskInput.value, personalPriority);
          createTask(personalList, taskInput.value, priority);
          saveTasksInLocalStorage(taskInput.value, personal);
          saveTasksInLocalStorage(taskInput.value, priority);
          closeSection(addTaskSection);
          break;
        case "learning":
          createTask(taskList, taskInput.value, learningPriority);
          createTask(learningList, taskInput.value, priority);
          saveTasksInLocalStorage(taskInput.value, learning);
          saveTasksInLocalStorage(taskInput.value, priority);
          closeSection(addTaskSection);
          break;
      }
      break;
    case "normal":
      switch (categoryInputValue) {
        case "work":
          createTask(workList, taskInput.value, normal);
          saveTasksInLocalStorage(taskInput.value, work);
          closeSection(addTaskSection);
          openSection(workCategorySection);
          break;
        case "personal":
          createTask(personalList, taskInput.value, normal);
          saveTasksInLocalStorage(taskInput.value, personal);
          closeSection(addTaskSection);
          openSection(personalCategorySection);
          break;
        case "learning":
          createTask(learningList, taskInput.value, normal);
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
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your task has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
}

function deletePriorityTask(e) {
  const item = e.target;
  const task = item.parentElement;
  if (item.classList[0] === "deleteButton") {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let childTask = task.firstChild;
        let nameTask1 = childTask.textContent;
        console.log(nameTask1);
        let childrenWorkList = workList.childNodes;
        let childrenPersonalList = personalList.childNodes;
        let childrenLearningList = learningList.childNodes;

        for (let i = 0; i < childrenWorkList.length; i++) {
          let nameTask = childrenWorkList[i].firstChild.textContent;
          const element = childrenWorkList[i];
          if (nameTask == nameTask1) {
            if (childrenWorkList[i].classList[1] === "priority") {
              console.log(element);
              element.remove();
            } else {
              console.log("Something wrong");
            }
          }
        }

        for (let i = 0; i < childrenPersonalList.length; i++) {
          let nameTask = childrenPersonalList[i].firstChild.textContent;
          const element = childrenPersonalList[i];
          if (nameTask == nameTask1) {
            if (childrenPersonalList[i].classList[1] === "priority") {
              console.log(element);
              element.remove();
            } else {
              console.log("Something wrong");
            }
          }
        }

        for (let i = 0; i < childrenLearningList.length; i++) {
          let nameTask = childrenLearningList[i].firstChild.textContent;
          const element = childrenLearningList[i];
          if (nameTask == nameTask1) {
            if (childrenLearningList[i].classList[1] === "priority") {
              console.log(element);
              element.remove();
            } else {
              console.log("Something wrong");
            }
          }
        }

        const taskWork = localStorage.getItem("work");
        const taskPersonal = localStorage.getItem("personal");
        const taskLearning = localStorage.getItem("learning");
        const taskPriority = localStorage.getItem("priority");

        if (
          taskPriority.includes(nameTask1) === true &&
          taskWork.includes(nameTask1) === true
        ) {
          console.log("działamyyyy");
          removePriorityFromLocalStorage(nameTask1, priority);
          removeTasksFromLocalStorage(nameTask1, work);
        } else if (
          taskPriority.includes(nameTask1) === true &&
          taskPersonal.includes(nameTask1) === true
        ) {
          removePriorityFromLocalStorage(nameTask1, priority);
          removeTasksFromLocalStorage(nameTask1, personal);
        } else if (
          taskPriority.includes(nameTask1) === true &&
          taskLearning.includes(nameTask1) === true
        ) {
          removePriorityFromLocalStorage(nameTask1, priority);
          removeTasksFromLocalStorage(nameTask1, learning);
        }

        console.log(task);

        task.remove();

        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
      numberOfTask(workList, numberTasksWork);
      numberOfTask(personalList, numberTasksPersonal);
      numberOfTask(learningList, numberTasksLearning);
    });
  }
}

function deleteTask(e) {
  const item = e.target;
  const task = item.parentElement;
  const categoryList = task.parentElement;
  if (item.classList[0] === "deleteButton") {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let childTask = task.firstChild;
        let nameTask1 = childTask.textContent;
        console.log(nameTask1);
        console.log(task);
        let childrenTaskList = taskList.childNodes;

        for (let i = 0; i < childrenTaskList.length; i++) {
          let nameTask = childrenTaskList[i].firstChild.textContent;
          const element = childrenTaskList[i];
          if (nameTask == nameTask1) {
            if (childrenTaskList[i].classList[1] === "workPriority") {
              console.log(element);
              element.remove();
            } else if (
              childrenTaskList[i].classList[1] === "personalPriority"
            ) {
              element.remove();
            } else if (
              childrenTaskList[i].classList[1] === "learningPriority"
            ) {
              element.remove();
            } else {
              console.log("Something wrong");
            }
          }
        }

        if (task.classList[1] === "priority") {
          if (categoryList.classList[1] === "workList") {
            removeTasksFromLocalStorage(nameTask1, work);
            removePriorityFromLocalStorage(nameTask1, priority);
          } else if (categoryList.classList[1] === "personalList") {
            removeTasksFromLocalStorage(nameTask1, personal);
            removePriorityFromLocalStorage(nameTask1, priority);
          } else if (categoryList.classList[1] === "learningList") {
            removeTasksFromLocalStorage(nameTask1, learning);
            removePriorityFromLocalStorage(nameTask1, priority);
          } else {
          }
        } else if (task.classList[1] === "normal") {
          if (categoryList.classList[1] === "workList") {
            removeTasksFromLocalStorage(nameTask1, work);
          } else if (categoryList.classList[1] === "personalList") {
            removeTasksFromLocalStorage(nameTask1, personal);
          } else if (categoryList.classList[1] === "learningList") {
            removeTasksFromLocalStorage(nameTask1, learning);
          } else {
          }
        }

        console.log(task);

        task.remove();

        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
      numberOfTask(workList, numberTasksWork);
      numberOfTask(personalList, numberTasksPersonal);
      numberOfTask(learningList, numberTasksLearning);
    });
  }
}

function completeTask(e) {
  const item = e.target;
  if (item.classList[0] === "completeButton") {
    const task = item.parentElement;
    task.classList.toggle("completed");
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
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

function createTask(list, value, name) {
  const taskDiv = document.createElement("div");
  const completedButton = document.createElement("button");
  const newTask = document.createElement("li");
  const deleteButton = document.createElement("button");
  taskDiv.classList.add("priorityTask__div");
  taskDiv.classList.add(name);

  newTask.innerText = value;
  newTask.classList.add("taskItem");
  taskDiv.appendChild(newTask);

  ////////// Completed button
  completedButton.innerHTML =
    '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">';
  completedButton.classList.add("completeButton");
  taskDiv.appendChild(completedButton);

  //////// Delete button
  deleteButton.innerHTML =
    '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">';
  deleteButton.classList.add("deleteButton");
  taskDiv.appendChild(deleteButton);

  ////////// Add div to list
  list.appendChild(taskDiv);
}

function welcome() {
  const key = localStorage.getItem("welcome");
  if (key == 1) {
    welcomeSection.classList.add("open-section");
    mainSection.style.display = "none";
  } else {
  }
}

function welcomeSettings() {
  const nickInput = document.querySelector(".nickInput");
  const valueNickInput = nickInput.value;
  localStorage.setItem("nick", valueNickInput);
  spanNick.innerHTML = valueNickInput;
  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      selectedGender = genders[i].value;
    }
  }
  switch (selectedGender) {
    case "male":
      localStorage.setItem("gender", "male");
      menProfile.style.display = "flex";
      break;
    case "female":
      localStorage.setItem("gender", "female");
      womenProfile.style.display = "flex";
      break;
  }
}

//////////////////////////////////////////////////// LOCAL STORAGE FUNCTION ///////////////////////////////////////////////////////////////////////////////

function getLocalStorage() {
  getNick();
  getGender();
  getWorkTask();
  getPersonalTask();
  getLearningTask();
  getPriorityTask();
  getLocalStorageWelcome();
}

function getNick() {
  let nick;
  if (localStorage.getItem("nick") === null) {
    localStorage.setItem("nick", null);
  } else {
    nick = localStorage.getItem("nick");
    localStorage.setItem("nick", nick);
    spanNick.innerHTML = nick;
  }
}

function getGender() {
  let gender;
  if (localStorage.getItem("gender") === null) {
    localStorage.setItem("gender", null);
  } else {
    gender = localStorage.getItem("gender");
    localStorage.setItem("gender", gender);
  }
  switch (localStorage.getItem("gender")) {
    case "male":
      menProfile.style.display = "flex";
      break;
    case "female":
      womenProfile.style.display = "flex";
  }
}

function saveLocalStorageWelcome() {
  getLocalStorageWelcome();
  localStorage.setItem("welcome", 2);
  welcomeSection.classList.remove("open-section");
  mainSection.style.display = "flex";
  welcomeSettings();
}

function getLocalStorageWelcome() {
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
  const arr = localStorage.getItem("priority");
  tasks.forEach(function (task) {
    if (arr.includes(task) === true) {
      createTask(workList, task, priority);
    } else {
      createTask(workList, task, normal);
    }
  });
}

function getPersonalTask() {
  let tasks;
  if (localStorage.getItem("personal") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("personal"));
  }
  const arr = localStorage.getItem("priority");
  tasks.forEach(function (task) {
    if (arr.includes(task) === true) {
      createTask(personalList, task, priority);
    } else {
      createTask(personalList, task, normal);
    }
  });
}

function getLearningTask() {
  let tasks;
  if (localStorage.getItem("learning") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("learning"));
  }
  const arr = localStorage.getItem("priority");
  tasks.forEach(function (task) {
    if (arr.includes(task) === true) {
      createTask(learningList, task, priority);
    } else {
      createTask(learningList, task, normal);
    }
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
    if (lsPriority.includes(task) === true && lsWork.includes(task) === true) {
      createTask(taskList, task, workPriority);
    } else if (
      lsPriority.includes(task) === true &&
      lsPersonal.includes(task) === true
    ) {
      createTask(taskList, task, personalPriority);
    } else if (
      lsPriority.includes(task) === true &&
      lsLearning.includes(task) === true
    ) {
      createTask(taskList, task, learningPriority);
    }
  });
}

function removeTasksFromLocalStorage(task, name) {
  let tasks;
  if (localStorage.getItem(name) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(name));
  }
  console.log(tasks);
  tasks.splice(tasks.indexOf(task), 1);
  console.log(tasks);
  localStorage.setItem(name, JSON.stringify(tasks));
}

function removePriorityFromLocalStorage(task, name) {
  let tasks;
  if (localStorage.getItem(name) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(name));
  }
  console.log(task);
  console.log(tasks);
  // const taskIndex = task.children[1].innerText;
  // console.log(taskIndex);
  tasks.splice(tasks.indexOf(task), 1);
  console.log(tasks);
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
