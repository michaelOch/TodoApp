class TodoItem {

    addTodoToList(todoIndex, todo) {
        const colour = todo.priority ? 'red-text' : '';
        const listItem = document.createElement('li');
        listItem.className = 'collection-item';
        listItem.innerHTML = `
            <label class="title-label">
                <input type="checkbox" id="complete" class="filled-in"/>
                <span class="${colour}">${todo.title}</span>
                <a href="" class="secondary-content">
                    <i class="material-icons grey-text text-darken-4 left delete">delete</i>
                </a>
                <a href="#editTodo" class="secondary-content modal-trigger">
                    <i class="material-icons grey-text text-darken-4 left edit">edit</i>
                </a>
            </label>`;
        listItem.setAttribute('data-attribute', String(todoIndex));

        document.querySelector('.collection').appendChild(listItem);
    }

    addTodoToListFromStore(todo) {
        const colour = todo.priority ? 'red-text' : '';
        const listItem = document.createElement('li');
        listItem.className = 'collection-item';
        listItem.innerHTML = `
            <label class="title-label">
                <input type="checkbox" id="complete" class="filled-in" ${todo.isComplete ? 'checked' : ''} />
                <span class="${colour}" style="${todo.isComplete ? 'text-decoration: line-through' : ''}">${todo.title}</span>
                <a href="" class="secondary-content">
                    <i class="material-icons grey-text text-darken-4 left delete">delete</i>
                </a>
                <a href="#editTodo" class="secondary-content modal-trigger">
                    <i class="material-icons grey-text text-darken-4 left edit">edit</i>
                </a>
            </label>`;
        listItem.setAttribute('data-attribute', `${todo.id}`);

        document.querySelector('.collection').appendChild(listItem);
    }

    removeTodoFromList(target) {
        if(confirm('Are you sure you want to delete task?')) {
            target.parentElement.parentElement.parentElement.remove();
        }
    }

    updateTodoList() {

    }
}

export default TodoItem;