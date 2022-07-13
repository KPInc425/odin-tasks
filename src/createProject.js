import GenerateUniqueID from "./generateUniqueID";

function createProject(projectTitle, projectDescription, projectPriority) {
    projectTitle = projectTitle || "New Project";
    projectDescription = projectDescription || "New Description";
    projectPriority = projectPriority || "Low";
    const createDate = new Date();
    const projectID = GenerateUniqueID();

    const info = () => {
        console.log({projectTitle, projectTitle, projectPriority, createDate});
    };

    let projectTaskArray = [];
    let completedTaskArray = [];

    const addTaskToProject = (newTask) => {
        projectTaskArray.push(newTask);
        // console.log(projectTaskArray);
    }

    // const removeTaskFromProject = (taskName) => {

    // }

    return {
        projectTitle,
        projectDescription,
        projectPriority,
        addTaskToProject,
        projectTaskArray,
        completedTaskArray,
        projectID,
    };
};

export default createProject;