class Project {
    constructor(name, creationDate, list = []) {
        this.name = name;
        this.creationDate = creationDate;
        this.list = list;
    }

    getName() {
        return this.name;
    }

    getCreationDate() {
        return this.creationDate;
    }

    addToProject(todo) {
        return this.list.push(todo);
    }

    removeFromProject(todos, id) {
        todos.forEach(todo => {

        });
        this.list.splice(id, 1);
    }
}

export default Project;