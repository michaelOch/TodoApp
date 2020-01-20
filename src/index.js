import appName from './AppName';
import Project from './Project';
import TodoItem from './TodoItem';
import ProjectDisplayUI from './ProjectDisplayUI';
import CreateProjectUI from './CreateProjectUI';
import Store from './Store';
import Todo from './Todo';
import uuid from 'uuid';
import EditModal from './EditModal';

document.addEventListener('DOMContentLoaded', Store.displayListOfProjects);

const content = document.querySelector('#content');

content.innerHTML = `${ProjectDisplayUI('Project 1').outerHTML}`;
// content.dataset.project = 'Project 1';
// Store.displayTodo(appName, 'Project 1');

document.body.addEventListener('click', function(e) {
    console.log(e.target);
    //  New Project event listener
    if(e.target.classList.contains('new-project') || e.target.parentElement.classList.contains('new-project')) {
        content.innerHTML = `${CreateProjectUI().outerHTML}`;

        e.preventDefault();
    }

    //  
    if(e.target.classList.contains('project')) {
        content.dataset.project = e.target.textContent;
        content.innerHTML = `${ProjectDisplayUI(e.target.textContent).outerHTML}`;
        Store.displayTodo(appName, e.target.textContent);

        // document.querySelector('.datepicker').datepicker();

        // document.querySelector('.sidenav').style.display = 'none';

        e.preventDefault();
    }

    //  Add Project
    if(e.target.id === 'add-project-btn') {
        const name = document.querySelector('#project-name').value;
        
        const project = new Project(name, Date.now());

        const sideNav = document.querySelector('.sidenav');
        const nav = document.querySelector('#nav-ul');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a class="project">${project.getName()}</a>
        `;
        const listItemClone = listItem.cloneNode(true);
        
        sideNav.appendChild(listItem);
        nav.appendChild(listItemClone);

        document.querySelector('#project-name').value = '';

        e.preventDefault();
    }

    //  Add Task
    if(e.target.id === 'add-task') {
        if(document.querySelector('#title').value !== '') {
            const taskId = uuid.v4();
            const title = document.querySelector('#title').value;
            const description = document.querySelector('#description').value;
            const dueDate = document.querySelector('#dueDate').value;
            const priority = document.querySelector('#priority').checked;

            //  Instantiate task
            const todo = new Todo(taskId, title, description, dueDate, priority);
            //  Instantiate UI
            const todoItem = new TodoItem();

            //  Add todo to list
            todoItem.addTodoToList(taskId, todo);

            //  Add todo to LS
            Store.addTodo(appName, content.dataset.project, todo);

            document.querySelector('#title').value = document.querySelector('#description').value = document.querySelector('#dueDate').value = '';
            document.querySelector('#priority').checked = false;
        } else {
            alert('You have to fill out form!');
        }

        e.preventDefault();
    }

    //  Delete Task
    if(e.target.classList.contains('delete')) {
        const todoItem = new TodoItem();
        todoItem.removeTodoFromList(e.target);
        Store.removeTodo(appName, content.dataset.project, e.target.parentElement.parentElement.parentElement.getAttribute('data-attribute'));

        e.preventDefault();
    }

    //  Edit Task
    if(e.target.classList.contains('edit')) {
        const id = e.target.parentElement.parentElement.parentElement.getAttribute('data-attribute');
        const todo = Store.editTodo(appName, content.dataset.project, id);
        document.body.appendChild(EditModal(todo[0].id, todo[0].title, todo[0].description, todo[0].dueDate, todo[0].priority));
        document.querySelector('.bg-modal').style.display = 'flex';

        e.preventDefault();
    }

    //  CLose Edit Task
    if(e.target.classList.contains('close')) {
        // document.querySelector('.bg-modal').style.display = 'none';
        document.body.removeChild(document.querySelector('.bg-modal'));
    }

    //  Add Edited Task
    if(e.target.id === 'edit-task') {
        const taskId = document.querySelector('#edit-id').value;
        const title = document.querySelector('#edit-title').value;
        const description = document.querySelector('#edit-description').value;
        const dueDate = document.querySelector('#edit-dueDate').value;
        const priority = document.querySelector('#edit-priority').checked;

        //  Update Editted Todo in LS
        Store.updateEdittedTodo(appName, content.dataset.project, taskId, title, description, dueDate, priority);

        //  Clear UI displayed Todos
        document.querySelector('.collection').innerHTML = '';

        //  Display updated values on UI
        Store.displayTodo(appName, content.dataset.project);

        // document.querySelector('.bg-modal').style.display = 'none';
        document.body.removeChild(document.querySelector('.bg-modal'));

        e.preventDefault();
    }

    //  Task Completed
    if(e.target.id === 'complete') {
        Store.completeTodo(appName, content.dataset.project, e.target.parentElement.parentElement.getAttribute('data-attribute'));

        //  Clear UI displayed Todos
        document.querySelector('.collection').innerHTML = '';

        //  Display updated values on UI
        Store.displayTodo(appName, content.dataset.project);
    }
});