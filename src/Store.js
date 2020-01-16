import TodoItem from './TodoItem';
import MenuItem from './Menu';

class Store {
    static getTodo(project) {
        let myTodo;
        if(localStorage.getItem(project) === null) {
            myTodo = [];
        } else {
            myTodo = JSON.parse(localStorage.getItem(project));
        }

        return myTodo;
    }

    static displayListOfProjects() {
        for(let i = 0; i < localStorage.length; i++) {
            const menuItem = new MenuItem();
            menuItem.addMenuToNav(localStorage.key(i));
        }
    }

    static removeProject(project) {
        localStorage.removeItem(project);
    }

    static displayTodo(project) {
        const todos = Store.getTodo(project);

        todos.forEach(function(todo) {
            //  Instantiate UI
            const todoItem = new TodoItem();

            todoItem.addTodoToListFromStore(todo);
        });
    }

    static addTodo(project, todo) {
        const todos = Store.getTodo(project);
        
        todos.push(todo);

        localStorage.setItem(project, JSON.stringify(todos));
    }

    static removeTodo(project, todoInd) {
        const todos = Store.getTodo(project);

        todos.forEach(function(todo, index) {
            if(todo.id == todoInd) {
                todos.splice(index, 1);
            }
        });

        localStorage.setItem(project, JSON.stringify(todos));
    }

    static updateTodo(project, todoInd){
        const todos = Store.getTodo(project);
        const newTodos = todos.map(todo => {
            if(todo.id === todoInd) {
                todo.isComplete = !(todo.isComplete);
                console.log(`isComplete: ${todo.isComplete}`);
            }

            return todo;
        });

        localStorage.setItem(project, JSON.stringify(newTodos));
    }

    static editTodo (project, todoInd) {
        const todos = Store.getTodo(project);
        const newTodo = todos.filter(todo => todo.id === todoInd);

        console.log(newTodo);
        return newTodo;
    }

    static updateEdittedTodo(project, todoInd, title, description, dueDate, priority){
        const todos = Store.getTodo(project);
        const newTodos = todos.map(todo => {
            if(todo.id === todoInd) {
                todo.title = title;
                todo.description = description;
                todo.dueDate = dueDate;
                todo.priority = priority;
            }

            return todo;
        });

        localStorage.setItem(project, JSON.stringify(newTodos));
    }
}

export default Store;