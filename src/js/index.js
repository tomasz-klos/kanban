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
const uncompleted = "uncompleted";
const completed = "completed";

const numberTasksWork = document.querySelector(".numberOfTaskWork--js");
const numberTasksPersonal = document.querySelector(".numberOfTaskPersonal--js");
const numberTasksLearning = document.querySelector(".numberOfTaskLearning--js");

const typeTaskInput = document.getElementsByName("typeTask");
let typeTaskInputValue;
const categoryInput = document.getElementsByName("categoryTask");
let categoryInputValue;

const descriptionTaskInput = document.querySelector(".taskDescriptionInput");

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

const buttonUpdateDescription = document.querySelector(".buttonUpdate--js");

buttonUpdateDescription.addEventListener("click", updateDescriptionTask);

function updateDescriptionTask() {
  console.log(spanDescription.value);
  console.log(spanNameTask.textContent);
  const lsPriority = JSON.parse(localStorage.getItem(priority));
  const lsWork = JSON.parse(localStorage.getItem(work));
  const lsPersonal = JSON.parse(localStorage.getItem(personal));
  const lsLearning = JSON.parse(localStorage.getItem(learning));
  let nameTask = spanNameTask.textContent;

  for (let i = 0; i < lsPriority.length; i++) {
    if (lsPriority[i].taskTitle === nameTask) {
      lsPriority[i].description = spanDescription.value;
      localStorage.setItem(priority, JSON.stringify(lsPriority));
    } else {
    }
  }
  let indexOfTaskW = lsWork.findIndex((x) => x.taskTitle === nameTask);
  let indexOfTaskP = lsPersonal.findIndex((x) => x.taskTitle === nameTask);
  let indexOfTaskL = lsLearning.findIndex((x) => x.taskTitle === nameTask);
  console.log(indexOfTaskW);

  if (indexOfTaskW != -1) {
    lsWork[indexOfTaskW].description = spanDescription.value;
    localStorage.setItem(work, JSON.stringify(lsWork));
    console.log("ja działaaam");
  }
  if (indexOfTaskP != -1) {
    lsPersonal[indexOfTaskP].description = spanDescription.value;
    localStorage.setItem(personal, JSON.stringify(lsPersonal));
    console.log("ja działaaam");
  }
  if (indexOfTaskL != -1) {
    lsLearning[indexOfTaskL].description = spanDescription.value;
    localStorage.setItem(learning, JSON.stringify(lsLearning));
    console.log("ja działaaam");
  }
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Task description has been updated",
    showConfirmButton: false,
    timer: 1500,
  });
}

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
taskList.addEventListener("click", completePriorityTask);

taskList.addEventListener("click", openTask.bind(event, priority));
workList.addEventListener("click", openTask.bind(event, work));
personalList.addEventListener("click", openTask.bind(event, personal));
learningList.addEventListener("click", openTask.bind(event, learning));

workList.addEventListener("click", deleteTask);
personalList.addEventListener("click", deleteTask);
learningList.addEventListener("click", deleteTask);

workList.addEventListener("click", completeTask.bind(event, work, workList));
personalList.addEventListener(
  "click",
  completeTask.bind(event, personal, personalList)
);
learningList.addEventListener(
  "click",
  completeTask.bind(event, learning, learningList)
);

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
            createTask(taskList, taskInput.value, workPriority, uncompleted);
            createTask(workList, taskInput.value, workPriority, uncompleted);
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
            createTask(
              taskList,
              taskInput.value,
              personalPriority,
              uncompleted
            );
            createTask(
              personalList,
              taskInput.value,
              personalPriority,
              uncompleted
            );
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
            createTask(
              taskList,
              taskInput.value,
              learningPriority,
              uncompleted
            );
            createTask(
              learningList,
              taskInput.value,
              learningPriority,
              uncompleted
            );
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
            createTask(workList, taskInput.value, workNormal, uncompleted);
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
            createTask(
              personalList,
              taskInput.value,
              personalNormal,
              uncompleted
            );
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
            createTask(
              learningList,
              taskInput.value,
              learningNormal,
              uncompleted
            );
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
            if (childrenWorkList[i].classList[1] === "workPriority") {
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
            if (childrenPersonalList[i].classList[1] === "personalPriority") {
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
            if (childrenLearningList[i].classList[1] === "learningPriority") {
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

        for (let i = 0; i < childrenTaskList.length; i++) {
          let nameTask = childrenTaskList[i].firstChild.textContent;
          const element = childrenTaskList[i];
          if (nameTask == nameTask1) {
            console.log(element);
            element.remove();
          } else {
            console.log("Something wrong");
          }
        }

        if (task.classList[1] === workPriority) {
          removeTasksFromLocalStorage(nameTask1, priority);
          removeTasksFromLocalStorage(nameTask1, work);
        } else if (task.classList[1] === personalPriority) {
          removeTasksFromLocalStorage(nameTask1, priority);
          removeTasksFromLocalStorage(nameTask1, personal);
        } else if (task.classList[1] === learningPriority) {
          removeTasksFromLocalStorage(nameTask1, priority);
          removeTasksFromLocalStorage(nameTask1, learning);
        } else {
          console.log("nie działaaaaa");
        }

        if (task.classList[1] === workNormal) {
          removeTasksFromLocalStorage(nameTask1, work);
        } else if (task.classList[1] === personalNormal) {
          removeTasksFromLocalStorage(nameTask1, personal);
        } else if (task.classList[1] === learningNormal) {
          removeTasksFromLocalStorage(nameTask1, learning);
        } else {
          console.log("nie działaaaaa");
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

function completePriorityTask(e) {
  const item = e.target;
  const task = item.parentElement;
  const nameTask = task.firstChild.textContent;
  const tasks = JSON.parse(localStorage.getItem(priority));
  const lsWork = JSON.parse(localStorage.getItem(work));
  const lsPersonal = JSON.parse(localStorage.getItem(personal));
  const lsLearning = JSON.parse(localStorage.getItem(learning));
  const found = tasks.find((x) => x.taskTitle === nameTask);
  const index = tasks.findIndex((x) => x.taskTitle === nameTask);
  if (task.classList[2] === uncompleted) {
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
          task.classList.add("completed");

          if (task.classList[1] === workPriority) {
            let indexOfTaskW = lsWork.findIndex(
              (x) => x.taskTitle === nameTask
            );
            lsWork[indexOfTaskW].status = "completed";
            localStorage.setItem(work, JSON.stringify(lsWork));
            workList.innerHTML = "";
          } else if (task.classList[1] === personalPriority) {
            let indexOfTaskP = lsPersonal.findIndex(
              (x) => x.taskTitle === nameTask
            );
            lsPersonal[indexOfTaskP].status = "completed";
            localStorage.setItem(personal, JSON.stringify(lsPersonal));
            personalList.innerHTML = "";
          } else if (task.classList[1] === learningPriority) {
            let indexOfTaskL = lsLearning.findIndex(
              (x) => x.taskTitle === nameTask
            );
            lsLearning[indexOfTaskL].status = "completed";
            localStorage.setItem(learning, JSON.stringify(lsLearning));
            learningList.innerHTML = "";
          }

          tasks.splice(index, 1);
          console.log(tasks);
          found.status = "completed";
          tasks.push(found);
          localStorage.setItem(priority, JSON.stringify(tasks));

          //// Reload List
          workList.innerHTML = "";
          personalList.innerHTML = "";
          learningList.innerHTML = "";
          taskList.innerHTML = "";
          getPriorityTasks();
          getPriorityCategoryTasks();
          getNormalTasks(work);
          getNormalTasks(personal);
          getNormalTasks(learning);

          console.log(tasks);

          Swal.fire("Completed!", "Your task has been completed.", "success");
        }
      });
    } else {
      console.log("coś nie działa");
    }
  } else {
    if (item.classList[0] === "completeButton") {
      Swal.fire({
        title: "Are you sure?",
        text: "Your task is completed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          task.classList.remove("completed");

          if (task.classList[1] === workPriority) {
            let indexOfTaskW = lsWork.findIndex(
              (x) => x.taskTitle === nameTask
            );
            lsWork[indexOfTaskW].status = "uncompleted";
            localStorage.setItem(work, JSON.stringify(lsWork));
            workList.innerHTML = "";
          } else if (task.classList[1] === personalPriority) {
            let indexOfTaskP = lsPersonal.findIndex(
              (x) => x.taskTitle === nameTask
            );
            lsPersonal[indexOfTaskP].status = "uncompleted";
            localStorage.setItem(personal, JSON.stringify(lsPersonal));
            personalList.innerHTML = "";
          } else if (task.classList[1] === learningPriority) {
            let indexOfTaskL = lsLearning.findIndex(
              (x) => x.taskTitle === nameTask
            );
            lsLearning[indexOfTaskL].status = "uncompleted";
            localStorage.setItem(learning, JSON.stringify(lsLearning));
            learningList.innerHTML = "";
          }
          tasks.splice(index, 1);
          console.log(tasks);
          found.status = "uncompleted";
          tasks.push(found);

          localStorage.setItem(priority, JSON.stringify(tasks));

          /// Reload List
          workList.innerHTML = "";
          personalList.innerHTML = "";
          learningList.innerHTML = "";
          taskList.innerHTML = "";
          getPriorityTasks();
          getPriorityCategoryTasks();
          getNormalTasks(work);
          getNormalTasks(personal);
          getNormalTasks(learning);

          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
      console.log("Mam klase completed");
    }
  }
}

function completeTask(name, list, e) {
  const item = e.target;
  const task = item.parentElement;
  const nameTask = task.firstChild.textContent;
  const priorityLS = JSON.parse(localStorage.getItem(priority));
  const tasks = JSON.parse(localStorage.getItem(name));
  const found = tasks.find((x) => x.taskTitle === nameTask);
  console.log(found);
  const index = tasks.findIndex((x) => x.taskTitle === nameTask);
  console.log(index);
  if (task.classList[2] === uncompleted) {
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
          task.classList.add("completed");

          if (
            task.classList[1] === workPriority ||
            task.classList[1] === personalPriority ||
            task.classList[1] === learningPriority
          ) {
            let indexOfTask = priorityLS.findIndex(
              (x) => x.taskTitle === nameTask
            );
            priorityLS[indexOfTask].status = "completed";
            localStorage.setItem(priority, JSON.stringify(priorityLS));
            console.log("tutaj działa panie all");
            taskList.innerHTML = "";
            getPriorityTasks();
          } else {
            console.log("nie działaaaa");
          }
          tasks.splice(index, 1);
          console.log(tasks);
          found.status = "completed";
          tasks.push(found);

          localStorage.setItem(name, JSON.stringify(tasks));

          /// Reload List
          learningList.innerHTML = "";
          workList.innerHTML = "";
          personalList.innerHTML = "";
          getNormalTasks(work);
          getNormalTasks(personal);
          getNormalTasks(learning);
          getPriorityCategoryTasks();

          Swal.fire("Completed!", "Your task has been completed.", "success");
        }
      });
    } else {
      console.log("TO nie przycisk completeButton");
    }
  } else {
    if (item.classList[0] === "completeButton") {
      Swal.fire({
        title: "Are you sure?",
        text: "Your task is completed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          task.classList.remove("completed");

          if (
            task.classList[1] === workPriority ||
            task.classList[1] === personalPriority ||
            task.classList[1] === learningPriority
          ) {
            let indexOfTask = priorityLS.findIndex(
              (x) => x.taskTitle === nameTask
            );
            priorityLS[indexOfTask].status = "uncompleted";
            localStorage.setItem(priority, JSON.stringify(priorityLS));
            taskList.innerHTML = "";
            getPriorityTasks();
          } else {
            console.log("nie działaaaa");
          }
          tasks.splice(index, 1);
          console.log(tasks);
          found.status = "uncompleted";
          tasks.push(found);

          localStorage.setItem(name, JSON.stringify(tasks));

          /// Reload List
          learningList.innerHTML = "";
          workList.innerHTML = "";
          personalList.innerHTML = "";
          getNormalTasks(work);
          getNormalTasks(personal);
          getNormalTasks(learning);
          getPriorityCategoryTasks();

          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
      console.log("Mam klase completed");
    }
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
        console.log(descriptionTask);
        spanDescription.value = "";
        spanDescription.value = descriptionTask;
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

function createTask(list, value, name, status) {
  const taskDiv = document.createElement("div");
  const completedButton = document.createElement("button");
  const newTask = document.createElement("li");
  const deleteButton = document.createElement("button");
  // const newDiv = document.createElement("div");
  taskDiv.classList.add("priorityTask__div");
  taskDiv.classList.add(name);
  taskDiv.classList.add(status);

  newTask.innerText = value;
  newTask.classList.add("taskItem");
  taskDiv.appendChild(newTask);
  // /////// Description div

  // newDiv.innerText = descriptionValue;
  // taskDiv.appendChild(newDiv);

  ////////// Completed button
  completedButton.innerHTML =
    '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/dc6682f343225efc296cc54b64e01fe63ec4f290/src/assets/img/Checkmark.svg">';
  completedButton.classList.add("completeButton");
  taskDiv.appendChild(completedButton);

  //////// Delete button
  deleteButton.innerHTML =
    '<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/afc206a9071cf3b905db34c6dd045a6ed960beac/src/assets/img/trash.svg">';
  deleteButton.classList.add("deleteButton");
  taskDiv.appendChild(deleteButton);

  ////////// Add div to list
  list.insertBefore(taskDiv, list.firstChild);
}

function LoadingTask(list, value, name, status) {
  const taskDiv = document.createElement("div");
  const completedButton = document.createElement("button");
  const newTask = document.createElement("li");
  const deleteButton = document.createElement("button");
  // const newDiv = document.createElement("div");
  taskDiv.classList.add("priorityTask__div");
  taskDiv.classList.add(name);
  taskDiv.classList.add(status);

  newTask.innerText = value;
  newTask.classList.add("taskItem");
  taskDiv.appendChild(newTask);
  // /////// Description div

  // newDiv.innerText = descriptionValue;
  // taskDiv.appendChild(newDiv);

  ////////// Completed button
  completedButton.innerHTML =
    '<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/dc6682f343225efc296cc54b64e01fe63ec4f290/src/assets/img/Checkmark.svg">';
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
  getPriorityCategoryTasks();
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
    status: "uncompleted",
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
    if (tasks[i].status === completed) {
    }
    let task = tasks[i].taskTitle;
    if (tasks[i].status === uncompleted) {
      if (tasks[i].category === workPriority) {
        createTask(taskList, task, workPriority, uncompleted);
      } else if (tasks[i].category === personalPriority) {
        createTask(taskList, task, personalPriority, uncompleted);
      } else if (tasks[i].category === learningPriority) {
        createTask(taskList, task, learningPriority, uncompleted);
      } else {
        console.log("coś jest nie tak");
      }
    } else if (tasks[i].status === completed) {
      if (tasks[i].category === workPriority) {
        LoadingTask(taskList, task, workPriority, completed);
      } else if (tasks[i].category === personalPriority) {
        LoadingTask(taskList, task, personalPriority, completed);
      } else if (tasks[i].category === learningPriority) {
        LoadingTask(taskList, task, learningPriority, completed);
      } else {
        console.log("coś jest nie tak");
      }
    } else {
      console.log("nie działa 1020");
    }
  }
}

function getPriorityCategoryTasks() {
  let tasks;
  if (localStorage.getItem("priority") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("priority"));
  }
  console.log(tasks);

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === completed) {
    }
    let task = tasks[i].taskTitle;
    if (tasks[i].status === uncompleted) {
      if (tasks[i].category === workPriority) {
        createTask(workList, task, workPriority, uncompleted);
      } else if (tasks[i].category === personalPriority) {
        createTask(personalList, task, personalPriority, uncompleted);
      } else if (tasks[i].category === learningPriority) {
        createTask(learningList, task, learningPriority, uncompleted);
      } else {
        console.log("coś jest nie tak");
      }
    } else if (tasks[i].status === completed) {
      if (tasks[i].category === workPriority) {
        LoadingTask(workList, task, workPriority, completed);
      } else if (tasks[i].category === personalPriority) {
        LoadingTask(personalList, task, personalPriority, completed);
      } else if (tasks[i].category === learningPriority) {
        LoadingTask(learningList, task, learningPriority, completed);
      } else {
        console.log("coś jest nie tak");
      }
    } else {
      console.log("nie działa 1020");
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
    if (tasks[i].status === uncompleted) {
      if (tasks[i].category === workNormal) {
        createTask(workList, task, workNormal, uncompleted);
      } else if (tasks[i].category === personalNormal) {
        createTask(personalList, task, personalNormal, uncompleted);
      } else if (tasks[i].category === learningNormal) {
        createTask(learningList, task, learningNormal, uncompleted);
      } else {
        console.log("getNormalTasks don't work");
      }
    } else if (tasks[i].status === completed) {
      if (tasks[i].category === workNormal) {
        LoadingTask(workList, task, workNormal, completed);
      } else if (tasks[i].category === personalNormal) {
        LoadingTask(personalList, task, personalNormal, completed);
      } else if (tasks[i].category === learningNormal) {
        LoadingTask(learningList, task, learningNormal, completed);
      } else {
        console.log("getNormalTasks don't work");
      }
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
  slidesPerView: 1.6
});
