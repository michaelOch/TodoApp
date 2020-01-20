import appName from './AppName';
import TodoItem from './TodoItem';
import MenuItem from './Menu';

class Store {
    static getTodo(app) {
        let myProjects;
        if(localStorage.getItem(app) === null) {
            myProjects = {};
        } else {
            myProjects = JSON.parse(localStorage.getItem(app));
        }

        return myProjects;
    }

    static addTodo(app, project, todo) {
        const projects = Store.getTodo(app);
        let myTodos;
        if(projects[project] !== undefined) {
            const todos = projects[project].todos;
            todos.push(todo);
            
            localStorage.setItem(app, JSON.stringify(projects));
        } else {
            projects[project] = {};
            myTodos = [];
            myTodos.push(todo);
            projects[project]["todos"] = myTodos;

            localStorage.setItem(app, JSON.stringify(projects));
        }
    }

    static displayListOfProjects() {
        const projects = Store.getTodo(appName);
        for(let i = 0; i < Object.keys(projects).length; i++) {
            const menuItem = new MenuItem();
            menuItem.addMenuToNav(Object.keys(projects)[i]);
        }
    }

    static displayTodo(app, project) {
        const projects = Store.getTodo(app);
        if(projects[project]) {
            const todos = projects[project]["todos"];

            todos.forEach(function(todo) {
                //  Instantiate UI
                const todoItem = new TodoItem();
    
                todoItem.addTodoToListFromStore(todo);
            });
        }
    }

    static removeTodo(app, project, todoInd) {
        const projects = Store.getTodo(app);
        const todos = projects[project]["todos"];

        todos.forEach(function(todo, index) {
            if(todo.id == todoInd) {
                todos.splice(index, 1);
            }
        });

        localStorage.setItem(app, JSON.stringify(projects));
    }

    static completeTodo(app, project, todoInd){
        const projects = Store.getTodo(app);
        const todos = projects[project]["todos"];
        const newTodos = todos.map(todo => {
            if(todo.id === todoInd) {
                todo.isComplete = !(todo.isComplete);
            }

            return todo;
        });

        projects[project]["todos"] = newTodos;

        localStorage.setItem(app, JSON.stringify(projects));
    }

    static editTodo (app, project, todoInd) {
        const projects = Store.getTodo(app);
        const todos = projects[project]["todos"];
        const newTodo = todos.filter(todo => todo.id === todoInd);

        return newTodo;
    }

    static updateEdittedTodo(app, project, todoInd, title, description, dueDate, priority){
        const projects = Store.getTodo(app);
        const todos = projects[project]["todos"];
        const newTodos = todos.map(todo => {
            if(todo.id === todoInd) {
                todo.title = title;
                todo.description = description;
                todo.dueDate = dueDate;
                todo.priority = priority;
            }

            return todo;
        });

        projects[project]["todos"] = newTodos;

        localStorage.setItem(app, JSON.stringify(projects));
    }

    static deleteProject(app, project) {
        console.log('delete project');
        const projects = Store.getTodo(app);
        delete projects[project];

        localStorage.setItem(app, JSON.stringify(projects));
    }
}

export default Store;