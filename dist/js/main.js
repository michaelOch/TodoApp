!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);e.exports=function(){return n(o),o}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},function(e,t){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,r=n;return[r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]]].join("")}},function(e,t,n){var o=n(3),r=n(4),i=r;i.v1=o,i.v4=r,e.exports=i},function(e,t,n){var o,r,i=n(0),a=n(1),l=0,c=0;e.exports=function(e,t,n){var d=t&&n||0,s=t||[],u=(e=e||{}).node||o,p=void 0!==e.clockseq?e.clockseq:r;if(null==u||null==p){var m=i();null==u&&(u=o=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==p&&(p=r=16383&(m[6]<<8|m[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,y=f-l+(v-c)/1e4;if(y<0&&void 0===e.clockseq&&(p=p+1&16383),(y<0||f>l)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=f,c=v,r=p;var b=(1e4*(268435455&(f+=122192928e5))+v)%4294967296;s[d++]=b>>>24&255,s[d++]=b>>>16&255,s[d++]=b>>>8&255,s[d++]=255&b;var g=f/4294967296*1e4&268435455;s[d++]=g>>>8&255,s[d++]=255&g,s[d++]=g>>>24&15|16,s[d++]=g>>>16&255,s[d++]=p>>>8|128,s[d++]=255&p;for(var T=0;T<6;++T)s[d+T]=u[T];return t||a(s)}},function(e,t,n){var o=n(0),r=n(1);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var l=0;l<16;++l)t[i+l]=a[l];return t||r(a)}},function(e,t,n){"use strict";n.r(t);var o="TodoApp";var r=class{constructor(e,t,n=[]){this.name=e,this.creationDate=t,this.list=n}getName(){return this.name}getCreationDate(){return this.creationDate}addToProject(e){return this.list.push(e)}removeFromProject(e,t){e.forEach(e=>{}),this.list.splice(t,1)}};var i=class{addTodoToList(e,t){const n=t.priority?"red-text":"",o=document.createElement("li");o.className="collection-item",o.innerHTML=`\n            <label class="title-label">\n                <input type="checkbox" id="complete" class="filled-in"/>\n                <span class="${n}">${t.title}</span>\n                <a href="" class="secondary-content">\n                    <i class="material-icons grey-text text-darken-4 left delete">delete</i>\n                </a>\n                <a href="#editTodo" class="secondary-content modal-trigger">\n                    <i class="material-icons grey-text text-darken-4 left edit">edit</i>\n                </a>\n            </label>`,o.setAttribute("data-attribute",String(e)),document.querySelector(".collection").appendChild(o)}addTodoToListFromStore(e){const t=e.priority?"red-text":"",n=document.createElement("li");n.className="collection-item",n.innerHTML=`\n            <label class="title-label">\n                <input type="checkbox" id="complete" class="filled-in" ${e.isComplete?"checked":""} />\n                <span class="${t}" style="${e.isComplete?"text-decoration: line-through":""}">${e.title}</span>\n                <a href="" class="secondary-content">\n                    <i class="material-icons grey-text text-darken-4 left delete">delete</i>\n                </a>\n                <a href="#editTodo" class="secondary-content modal-trigger">\n                    <i class="material-icons grey-text text-darken-4 left edit">edit</i>\n                </a>\n            </label>`,n.setAttribute("data-attribute",`${e.id}`),document.querySelector(".collection").appendChild(n)}removeTodoFromList(e){confirm("Are you sure you want to delete task?")&&e.parentElement.parentElement.parentElement.remove()}updateTodoList(){}};var a=function(e){const t=document.createElement("div");return t.innerHTML=`\n        <form class="col s12">\n            <div class="row">\n                <div class="input-field col s12">\n                    <input id="title" type="text" class="">\n                    <label for="title">Title</label>\n                </div>\n                <div class="input-field col s12">\n                    <input id="description" type="text" class="">\n                    <label for="description">Description</label>\n                </div>\n                <div class="input-field col s12">\n                    <input id="dueDate" type="text" class="datepicker">\n                    <label for="dueDate">Due Date</label>\n                </div>\n                <p class="col s12">\n                    <label for="priority">\n                        <input id="priority" type="checkbox" class="filled-in">\n                        <span>Priority<span>\n                    </label>\n                </p>\n                <button class="btn deep-orange lighten-1" type="submit" id="add-task">\n                    Add New Task\n                </button>\n            </div>\n        </form>\n        <h5>${e}</h5>\n        <ul class="collection"></ul>\n    `,t};var l=function(){const e=document.createElement("div");return e.innerHTML='\n        <h4>New Project</h4>\n        <div class="row">\n            <form class="col s12" id="project-form">\n                <div class="row">\n                    <div class="input-field col s12">\n                        <input id="project-name" type="text">\n                        <label for="project-name">Project Name</label>\n                    </div>\n                    <button class="btn deep-orange lighten-1" type="submit" id="add-project-btn">\n                        Add Project\n                    </button>\n                </div>\n            </form>\n        </div>\n    ',e};var c=class{addMenuToNav(e){const t=document.createElement("li");t.innerHTML=`<a href="" class="project">${e}</a>`;const n=t.cloneNode(!0);document.querySelector("#nav-ul").appendChild(t),document.querySelector(".sidenav").appendChild(n)}};class d{static getTodo(e){let t;return t=null===localStorage.getItem(e)?{}:JSON.parse(localStorage.getItem(e)),t}static addTodo(e,t,n){const o=d.getTodo(e);let r;if(void 0!==o[t]){o[t].todos.push(n),localStorage.setItem(e,JSON.stringify(o))}else o[t]={},r=[],r.push(n),o[t].todos=r,localStorage.setItem(e,JSON.stringify(o))}static displayListOfProjects(){const e=d.getTodo(o);for(let t=0;t<Object.keys(e).length;t++){(new c).addMenuToNav(Object.keys(e)[t])}}static displayTodo(e,t){const n=d.getTodo(e);if(n[t]){n[t].todos.forEach((function(e){(new i).addTodoToListFromStore(e)}))}}static removeTodo(e,t,n){const o=d.getTodo(e),r=o[t].todos;r.forEach((function(e,t){e.id==n&&r.splice(t,1)})),localStorage.setItem(e,JSON.stringify(o))}static completeTodo(e,t,n){const o=d.getTodo(e),r=o[t].todos.map(e=>(e.id===n&&(e.isComplete=!e.isComplete),e));o[t].todos=r,localStorage.setItem(e,JSON.stringify(o))}static editTodo(e,t,n){return d.getTodo(e)[t].todos.filter(e=>e.id===n)}static updateEdittedTodo(e,t,n,o,r,i,a){const l=d.getTodo(e),c=l[t].todos.map(e=>(e.id===n&&(e.title=o,e.description=r,e.dueDate=i,e.priority=a),e));l[t].todos=c,localStorage.setItem(e,JSON.stringify(l))}}var s=d;var u=class{constructor(e,t,n,o,r){this.id=e,this.title=t,this.description=n,this.dueDate=o,this.priority=r,this.isComplete=!1}},p=n(2),m=n.n(p);var f=function(e,t,n,o,r){const i=document.createElement("div");return i.className="bg-modal",i.innerHTML=`\n        <div class="edit-content">\n            <div class="close">+</div>\n            <form class="col s12">\n                <h4>Edit Todo</h4>\n                <div class="row">\n                    <input id="edit-id" type="hidden" class="" value="${e}">\n                    <div class="input-field col s12">\n                        <input id="edit-title" type="text" class="" value="${t}">\n                        <label for="edit-title">Title</label>\n                    </div>\n                    <div class="input-field col s12">\n                        <input id="edit-description" type="text" class="" value="${n}">\n                        <label for="edit-description">Description</label>\n                    </div>\n                    <div class="input-field col s12">\n                        <input id="edit-dueDate" type="text" class="datepicker" value="${o}">\n                        <label for="edit-dueDate">Due Date</label>\n                    </div>\n                    <p class="col s12">\n                        <label for="edit-priority">\n                            <input id="edit-priority" type="checkbox" class="filled-in" ${r?"checked":""} >\n                            <span>Priority<span>\n                        </label>\n                    </p>\n                    <button class="btn deep-orange lighten-1" type="submit" id="edit-task">\n                        Submit\n                    </button>\n                </div>\n            </form>\n        </div>\n    `,i};document.addEventListener("DOMContentLoaded",s.displayListOfProjects);const v=document.querySelector("#content");v.innerHTML=`${a("Project 1").outerHTML}`,document.body.addEventListener("click",(function(e){if((e.target.classList.contains("new-project")||e.target.parentElement.classList.contains("new-project"))&&(v.innerHTML=`${l().outerHTML}`,e.preventDefault()),e.target.classList.contains("project")&&(v.dataset.project=e.target.textContent,v.innerHTML=`${a(e.target.textContent).outerHTML}`,s.displayTodo(o,e.target.textContent),e.preventDefault()),"add-project-btn"===e.target.id){const t=document.querySelector("#project-name").value,n=new r(t,Date.now()),o=document.querySelector(".sidenav"),i=document.querySelector("#nav-ul"),a=document.createElement("li");a.innerHTML=`\n            <a class="project">${n.getName()}</a>\n        `;const l=a.cloneNode(!0);o.appendChild(a),i.appendChild(l),document.querySelector("#project-name").value="",e.preventDefault()}if("add-task"===e.target.id){if(""!==document.querySelector("#title").value){const e=m.a.v4(),t=document.querySelector("#title").value,n=document.querySelector("#description").value,r=document.querySelector("#dueDate").value,a=document.querySelector("#priority").checked,l=new u(e,t,n,r,a);(new i).addTodoToList(e,l),s.addTodo(o,v.dataset.project,l),document.querySelector("#title").value=document.querySelector("#description").value=document.querySelector("#dueDate").value="",document.querySelector("#priority").checked=!1}else alert("You have to fill out form!");e.preventDefault()}if(e.target.classList.contains("delete")){(new i).removeTodoFromList(e.target),s.removeTodo(o,v.dataset.project,e.target.parentElement.parentElement.parentElement.getAttribute("data-attribute")),e.preventDefault()}if(e.target.classList.contains("edit")){const t=e.target.parentElement.parentElement.parentElement.getAttribute("data-attribute"),n=s.editTodo(o,v.dataset.project,t);document.body.appendChild(f(n[0].id,n[0].title,n[0].description,n[0].dueDate,n[0].priority)),document.querySelector(".bg-modal").style.display="flex",e.preventDefault()}if(e.target.classList.contains("close")&&document.body.removeChild(document.querySelector(".bg-modal")),"edit-task"===e.target.id){const t=document.querySelector("#edit-id").value,n=document.querySelector("#edit-title").value,r=document.querySelector("#edit-description").value,i=document.querySelector("#edit-dueDate").value,a=document.querySelector("#edit-priority").checked;s.updateEdittedTodo(o,v.dataset.project,t,n,r,i,a),document.querySelector(".collection").innerHTML="",s.displayTodo(o,v.dataset.project),document.body.removeChild(document.querySelector(".bg-modal")),e.preventDefault()}"complete"===e.target.id&&(s.completeTodo(o,v.dataset.project,e.target.parentElement.parentElement.getAttribute("data-attribute")),document.querySelector(".collection").innerHTML="",s.displayTodo(o,v.dataset.project))}))}]);