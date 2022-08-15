import GenerateUniqueID from "./generateUniqueID";

function createProject(projectTitle, projectDescription, projectPriority, oldProjectID, createDateOG) {
    projectTitle = projectTitle || "New Project";
    projectDescription = projectDescription || "New Description";
    projectPriority = projectPriority || "Low";
    const createDate = new Date() || createDateOG;
    const projectID = oldProjectID || GenerateUniqueID();

    const info = () => {
        console.log({projectTitle, projectTitle, projectPriority, createDate});
    };

    let projectTaskArray = [];
    let completedTaskArray = [];

    const addTaskToProject = (newTask) => {
        projectTaskArray.push(newTask);
    }

    return {
        projectTitle,
        projectDescription,
        projectPriority,
        addTaskToProject,
        projectTaskArray,
        completedTaskArray,
        projectID,
        createDate,
    };
};

export default createProject;