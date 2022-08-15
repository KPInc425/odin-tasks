import createProject from "./createProject.js";

const createProjectFromProjectCardData = (projectCard) => {
    // console.log(projectCard);
    if (!(projectCard === undefined)) {
        let projectID = projectCard.getAttribute('data-id');
        let projectTitle = projectCard.querySelector('.projectTitle').textContent;
        let projectDescription = projectCard.querySelector('.projectDescription').textContent;
        let projectPriority = projectCard.querySelector('.projectPriority').textContent.replace(" Priority", "");
        let projectCreateDate = projectCard.querySelector('[data-createDate]').getAttribute('data-createDate');
        // Extract only the project title from the element textContent remove fluff

        // console.log(projectProject);
        // console.log(`projectTitle: ${projectTitle} projectDescr: ${projectDescription} projectStart: ${projectStartDate} projectDue: ${projectDueDate}`);
        // console.log(projectID);
        let editedProject = createProject(projectTitle, projectDescription, projectPriority, projectID, projectCreateDate); 
        // console.log(editedproject);
    
    //     editproject(editedproject.projectProject);
        return editedProject;
    }
}

export default createProjectFromProjectCardData;