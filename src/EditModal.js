function EditModal(id, title, description, dueDate, priority) {
    const element = document.createElement('div');
    element.className = 'bg-modal';
    element.innerHTML = `
        <div class="edit-content">
            <div class="close">+</div>
            <form class="col s12">
                <h4>Edit Todo</h4>
                <div class="row">
                    <input id="edit-id" type="hidden" class="" value="${id}">
                    <div class="input-field col s12">
                        <input id="edit-title" type="text" class="" value="${title}">
                        <label for="edit-title">Title</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="edit-description" type="text" class="" value="${description}">
                        <label for="edit-description">Description</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="edit-dueDate" type="text" class="datepicker" value="${dueDate}">
                        <label for="edit-dueDate">Due Date</label>
                    </div>
                    <p class="col s12">
                        <label for="edit-priority">
                            <input id="edit-priority" type="checkbox" class="filled-in" ${priority ? 'checked' : ''} >
                            <span>Priority<span>
                        </label>
                    </p>
                    <button class="btn deep-orange lighten-1" type="submit" id="edit-task">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    `;

    return element;
}

export default EditModal;