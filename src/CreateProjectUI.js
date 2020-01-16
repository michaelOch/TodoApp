function CreateProjectUi() {
    const element = document.createElement('div');
    element.innerHTML = `
        <h4>New Project</h4>
        <div class="row">
            <form class="col s12" id="project-form">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="project-name" type="text">
                        <label for="project-name">Project Name</label>
                    </div>
                    <button class="btn deep-orange lighten-1" type="submit" id="add-project-btn">
                        Add Project
                    </button>
                </div>
            </form>
        </div>
    `;

    return element;
}

export default CreateProjectUi;