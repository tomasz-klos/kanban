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
const workNormal = "workNormal";
const personalNormal = "personalNormal";
const learningNormal = "learningNormal";

const numberTasksWork = document.querySelector(".numberOfTaskWork--js");
const numberTasksPersonal = document.querySelector(".numberOfTaskPersonal--js");
const numberTasksLearning = document.querySelector(".numberOfTaskLearning--js");

const typeTaskInput = document.getElementsByName("typeTask");
let typeTaskInputValue;
const categoryInput = document.getElementsByName("categoryTask");
let categoryInputValue;

const descriptionTaskInput = document.querySelector(".taskDescriptionInput");
let descriptionTaskInputValue;

const hamburgerButton = document.querySelector(".hamburger--js");
const menuProfile = document.querySelector(".menuProfile--js");
const opacityDiv = document.querySelector(".opacityDiv--js");

const welcomeSection = document.querySelector(".welcomeSection--js");

const spanNick = document.querySelector(".type--nick");

const genders = document.getElementsByName("gender");
let selectedGender;

const menProfile = document.querySelector(".menProfile--js");
const womenProfile = document.querySelector(".womenProfile--js");

const taskContener = document.querySelector(".taskContener--js");
const spanDescription = document.querySelector(".description--js");
const spanNameTask = document.querySelector(".taskName--js");

const buttonBackTaskSection = document.querySelector(".buttonBackTask--js");

buttonBackTaskSection.addEventListener(
  "click",
  closeSection.bind(event, taskContener)
);

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

taskList.addEventListener("click", openTask.bind(event, priority));
workList.addEventListener("click", openTask.bind(event, work));
personalList.addEventListener("click", openTask.bind(event, personal));
learningList.addEventListener("click", openTask.bind(event, learning));

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
  if (taskInput.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "task must have a title!",
    });
  } else {
    switch (typeTaskInputValue) {
      case "priority":
        switch (categoryInputValue) {
          case "work":
            createTask(taskList, taskInput.value, workPriority);
            createTask(workList, taskInput.value, priority);
            saveTasksInLocalStorage(
              taskInput.value,
              descriptionTaskInput.value,
              work,
              work
            );
            saveTasksInLocalStorage(
              taskInput.value,
              descriptionTaskInput.value,
              priority,
              workPriority
            );
            closeSection(addTaskSection);

            break;
          case "personal":
            createTask(taskList, taskInput.value, personalPriority);
            createTask(personalList, taskInput.value, priority);
            saveTasksInLocalStorage(
              taskInput.value,
              descriptionTaskInput.value,
              personal,
              personal
            );
            saveTasksInLocalStorage(
              taskInput.value,
              descriptionTaskInput.value,
              priority,
              personalPriority
            );
            closeSection(addTaskSection);
            break;
          case "learning":
            createTask(taskList, taskInput.value, learningPriority);
            createTask(learningList, taskInput.value, priority);
            saveTasksInLocalStorage(
              taskInput.value,
              descriptionTaskInput.value,
              learning,
              learning
            );
            saveTasksInLocalStorage(
              taskInput.value,
              descriptionTaskInput.value,
              priority,
              learningPriority
            );
            closeSection(addTaskSection);
            break;
        }
        break;
      case "normal":
        switch (categoryInputValue) {
          case "work":
            createTask(workList, taskInput.value, workNormal);
            saveTasksInLocalStorage(
              taskInput.value,
              descriptionTaskInput.value,
              work,
              workNormal
            );
            closeSection(addTaskSection);
            openSection(workCategorySection);
            break;
          case "personal":
            createTask(personalList, taskInput.value, personalNormal);
            saveTasksInLocalStorage(
              taskInput.value,
              descriptionTaskInput.value,
              personal,
              personalNormal
            );
            closeSection(addTaskSection);
            openSection(personalCategorySection);
            break;
          case "learning":
            createTask(learningList, taskInput.value, learningNormal);
            saveTasksInLocalStorage(
              taskInput.value,
              descriptionTaskInput.value,
              learning,
              learningNormal
            );
            closeSection(addTaskSection);
            openSection(learningCategorySection);
            break;
        }
        break;
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your task has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    taskInput.value = "";
    descriptionTaskInput.value = "";
  }
  numberOfTask(workList, numberTasksWork);
  numberOfTask(personalList, numberTasksPersonal);
  numberOfTask(learningList, numberTasksLearning);
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

        const taskPriority = JSON.parse(localStorage.getItem("priority"));

        for (let i = 0; i < taskPriority.length; i++) {
          console.log(nameTask1);
          if (task.classList[1] === "workPriority") {
            console.log("MAM KLASE workPriority");
            removeTasksFromLocalStorage(nameTask1, priority);
            removeTasksFromLocalStorage(nameTask1, work);
          } else if (task.classList[1] === "personalPriority") {
            console.log("MAM KLASE personalPriority");
            removeTasksFromLocalStorage(nameTask1, priority);
            removeTasksFromLocalStorage(nameTask1, personal);
          } else if (task.classList[1] === "learningPriority") {
            console.log("MAM KLASE learningPriority");
            removeTasksFromLocalStorage(nameTask1, priority);
            removeTasksFromLocalStorage(nameTask1, learning);
          } else {
            console.log("coś nie działczy tutej");
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
  } else {
    console.log("whaaaat");
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

        if (task.classList[1] === workNormal) {
          removeTasksFromLocalStorage(nameTask1, work);
        } else if (task.classList[1] === personalNormal) {
          removeTasksFromLocalStorage(nameTask1, personal);
        } else if (task.classList[1] === learningNormal) {
          removeTasksFromLocalStorage(nameTask1, learning);
        } else {
          console.log("nie działaaaaa");
        }

        // for (let i = 0; i < childrenTaskList.length; i++) {
        //   let nameTask = childrenTaskList[i].firstChild.textContent;
        //   const element = childrenTaskList[i];
        //   if (nameTask == nameTask1) {
        //     if (childrenTaskList[i].classList[1] === "workPriority") {
        //       console.log(element);
        //       element.remove();
        //     } else if (
        //       childrenTaskList[i].classList[1] === "personalPriority"
        //     ) {
        //       element.remove();
        //     } else if (
        //       childrenTaskList[i].classList[1] === "learningPriority"
        //     ) {
        //       element.remove();
        //     } else {
        //       console.log("Something wrong");
        //     }
        //   }
        // }

        // if (task.classList[1] === "workNormal") {
        //   if (categoryList.classList[1] === "workList") {
        //     removeTasksFromLocalStorage(nameTask1, work);
        //     removeTasksFromLocalStorage(nameTask1, priority);
        //   } else if (categoryList.classList[1] === "personalList") {
        //     removeTasksFromLocalStorage(nameTask1, personal);
        //     removeTasksFromLocalStorage(nameTask1, priority);
        //   } else if (categoryList.classList[1] === "learningList") {
        //     removeTasksFromLocalStorage(nameTask1, learning);
        //     TasksFromLocalStorage(nameTask1, priority);
        //   } else {
        //   }
        // } else if (task.classList[1] === "normal") {
        //   if (categoryList.classList[1] === "workList") {
        //     removeTasksFromLocalStorage(nameTask1, work);
        //   } else if (categoryList.classList[1] === "personalList") {
        //     removeTasksFromLocalStorage(nameTask1, personal);
        //   } else if (categoryList.classList[1] === "learningList") {
        //     removeTasksFromLocalStorage(nameTask1, learning);
        //   } else {
        //   }
        // }

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
    Swal.fire({
      title: "Do you want to complete the task?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const task = item.parentElement;
        task.classList.toggle("completed");

        Swal.fire("Completed!", "Your task has been completed.", "success");
      }
    });
  } else {

  }
}

function openTask(storage, e) {
  const item = e.target;
  const task = item.parentElement;
  console.log(item);
  const nameTask = item.textContent;
  let array = JSON.parse(localStorage.getItem(storage));
  console.log(array);
  console.log(nameTask);
  console.log(task);
  if (nameTask.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].taskTitle === nameTask) {
        let descriptionTask = array[i].description;
        spanDescription.innerText = descriptionTask;
      }
    }
    spanNameTask.innerText = nameTask;
    taskContener.classList.add("open-section");
    mainSection.style.display = "none";
  } else {
    console.log("Klikasz obok");
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
  // const newDiv = document.createElement("div");
  taskDiv.classList.add("priorityTask__div");
  taskDiv.classList.add(name);

  newTask.innerText = value;
  newTask.classList.add("taskItem");
  taskDiv.appendChild(newTask);
  // /////// Description div

  // newDiv.innerText = descriptionValue;
  // taskDiv.appendChild(newDiv);

  ////////// Completed button
  completedButton.innerHTML =
    '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/f900cf613e059ca20d8378aee841181080810e91/src/assets/img/Checkmark.svg">';
  completedButton.classList.add("completeButton");
  taskDiv.appendChild(completedButton);

  //////// Delete button
  deleteButton.innerHTML =
    '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/afc206a9071cf3b905db34c6dd045a6ed960beac/src/assets/img/trash.svg">';
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
  getLocalStorageWelcome();
  if (nickInput.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "you must enter your nick",
    });
  } else {
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
    localStorage.setItem("welcome", 2);
    welcomeSection.classList.remove("open-section");
    mainSection.style.display = "flex";
  }
}

//////////////////////////////////////////////////// LOCAL STORAGE FUNCTION ///////////////////////////////////////////////////////////////////////////////

function getLocalStorage() {
  getNick();
  getGender();
  getPriorityTasks();
  getNormalTasks(work);
  getNormalTasks(personal);
  getNormalTasks(learning);
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
  welcomeSettings();
  getLocalStorageWelcome();
}

function getLocalStorageWelcome() {
  if (localStorage.getItem("welcome") === null) {
    localStorage.setItem("welcome", 1);
  } else {
  }
}

function saveTasksInLocalStorage(task, descriptionValue, name, category) {
  let tasks = [];
  if (localStorage.getItem(name) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(name));
  }
  let object = {
    taskTitle: task,
    description: descriptionValue,
    category: category,
  };
  tasks.push(object);
  console.log(JSON.stringify(object));

  localStorage.setItem(name, JSON.stringify(tasks));
}

function getPriorityTasks() {
  let tasks;
  if (localStorage.getItem("priority") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("priority"));
  }
  console.log(tasks);
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i].taskTitle;
    if (tasks[i].category === workPriority) {
      createTask(taskList, task, workPriority);
      createTask(workList, task, priority);
    } else if (tasks[i].category === personalPriority) {
      createTask(taskList, task, personalPriority);
      createTask(personalList, task, priority);
    } else if (tasks[i].category === learningPriority) {
      createTask(taskList, task, learningPriority);
      createTask(learningList, task, priority);
    } else {
      console.log("coś jest nie tak");
    }
  }
}

function getNormalTasks(category) {
  let tasks;
  if (localStorage.getItem(category) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(category));
  }
  console.log(tasks);
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i].taskTitle;
    if (tasks[i].category === workNormal) {
      createTask(workList, task, workNormal);
    } else if (tasks[i].category === personalNormal) {
      createTask(personalList, task, personalNormal);
    } else if (tasks[i].category === learningNormal) {
      createTask(learningList, task, learningNormal);
    } else {
      console.log("getNormalTasks don't work");
    }
  }
}

function removeTasksFromLocalStorage(task, name) {
  let tasks = [];
  if (localStorage.getItem(name) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(name));
  }
  // for (let i = 0; i < tasks.length; i++) {
  //   let taskTitle = tasks[i].taskTitle;
  //   let description = tasks[i].description;
  //   if (tasks[i].taskTitle === task) {

  //     tasks.splice(tasks[i]);
  //   } else {
  //     console.log("NOT WOOOOORK");
  //   }
  // }
  tasks = tasks.filter((obj) => obj.taskTitle != task);
  localStorage.setItem(name, JSON.stringify(tasks));

  // console.log(removeIndex);
  // console.log(tasks);
  // tasks.splice(removeIndex, 1);
  // console.log(tasks);
  // localStorage.setItem(name, tasks);
  // const removeIndex = tasks.map(function(item) { return item.taskTitle; }).indexOf(task);
  // console.log(removeIndex);
  // tasks.splice(removeIndex, 1);
  // console.log(tasks);
  // localStorage.setItem(name, JSON.stringify(tasks));
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
