import createProject from "./createProject";

const createFullNewProject = (projectCard) => {
    // console.log(taskCard);
    if (!(projectCard === undefined)) {
        let projectID = projectCard.id

        let projectTitle;
        if (projectCard.querySelector('.projectTitle').value.length < 3) {
            projectTitle = projectCard.querySelector('.projectTitle').placeholder;
        } else {
            projectTitle = projectCard.querySelector('.projectTitle').value
        }
        let projectDescription;
        if (projectCard.querySelector('.projectDescription').value.length < 3) {
            projectDescription = projectCard.querySelector('.projectDescription').placeholder;
        } else {
            projectDescription = projectCard.querySelector('.projectDescription').value;
        }
        console.log(projectCard.querySelector('.inputPriorityForm'))
        let projectPriority = projectCard.querySelector('.inputPriorityForm').getAttribute('data-priority');


        console.log(projectCard);
        // console.log(`TaskTitle: ${taskTitle} TaskDescr: ${taskDescription} TaskStart: ${taskStartDate} TaskDue: ${taskDueDate}`);
        // console.log(taskID);
        let newProject = createProject(projectTitle, projectDescription, projectPriority);
        // console.log(editedTask);
    
    //     editTask(editedTask.taskProject);
        return newProject;
    }
}

export default createFullNewProject;