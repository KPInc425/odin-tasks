import createProject from "./createProject";
import createTask from "./createTask";


let allProjectsArray = [];

const loadProjectData = () => {
    // if no data exists
        // Create Default project with sample task    
        allProjectsArray.push(createProject('Default Project'));
        allProjectsArray[0].addTaskToProject(createTask());
    // else 
        // Load already present data
}

const addNewProjectToArray = (projectName) => {
    allProjectsArray.push(createProject(projectName));
}

const addNewTask = (projectIndex, newTask) => {
    if (!(newTask == undefined)) {
        allProjectsArray[projectIndex].addTaskToProject(createTask(newTask))
    }
    allProjectsArray[projectIndex].addTaskToProject(createTask())
}

const projectArray = () => {
    return allProjectsArray;
}   

const replaceProjectData = (newProjectData, index) => {
    allProjectsArray[index] = newProjectData;
}

const getDefaultProjectTasks = () => {
    return allProjectsArray[0].projectTaskArray;
}
const getDefaultProject = () => {
    return allProjectsArray[0];
}

const getProjectFromTitle = (projectTitle) => {
    // search through projectArray for selected title
    // console.log(projectTitle);
    for (const project of allProjectsArray) {
        // console.log(project);
        // console.log(project.projectTitle);
        if (projectTitle == project.projectTitle) {
            console.log("Found Project!");
            return project;
        }
    }
}

const editTask = (editedTask) => {
    console.log(editedTask);
    let project = getProjectFromTitle(editedTask.taskProject);
    console.log(project);
    project.projectTaskArray.forEach((task) => {
        if (task.taskID === editedTask.taskID) {
            console.log(task);
        }
    })
}



export {
    loadProjectData,
    projectArray,
    addNewProjectToArray,
    addNewTask,
    replaceProjectData,
    getDefaultProjectTasks,
    getDefaultProject,
    getProjectFromTitle,
    editTask,
}; 
  
