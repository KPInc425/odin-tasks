import displayCreateNewProject from "./displayCreateNewProject";

const el_createProject = () => {
    const createProjectButton = document.getElementById('createNewProject');

    createProjectButton.addEventListener('click', () => {
        console.log('click');
        displayCreateNewProject();
    })
}

export default el_createProject;