!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var r=document.querySelector(".taskInput"),a=document.querySelector(".taskButton"),c=document.querySelector(".taskList");a.addEventListener("click",(function(e){e.preventDefault();var t=document.createElement("div");t.classList.add("taskSection__div");var n=document.createElement("li");n.innerText=r.value,n.classList.add("taskItem"),t.appendChild(n);var a=document.createElement("button");a.innerHTML='<img class="checkmark" src="https://raw.githubusercontent.com/tomasz-klos/kanban/b422b9c55237de332b0bd145aa63e29bac444d9e/src/assets/img/Checkmark.svg">',a.classList.add("completeButton"),t.appendChild(a);var o=document.createElement("button");o.innerHTML='<img class="trash" src="https://raw.githubusercontent.com/tomasz-klos/kanban/d1dc6f3b939beba0441e0fd42ebde29dfb933890/src/assets/img/trash.svg">',o.classList.add("deleteButton"),t.appendChild(o),c.appendChild(t),r.value=""})),c.addEventListener("click",(function(e){var t=e.target;if("deleteButton"===t.classList[0]){t.parentElement.remove()}})),c.addEventListener("click",(function(e){var t=e.target;if("completeButton"===t.classList[0]){t.parentElement.classList.toggle("completed")}}))},function(e,t,n){}]);