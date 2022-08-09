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

// DON'T FORGET THIS RETURNS AN OBJECT
const getProjectFromTitle = (projectTitle) => {
    // search through projectArray for selected title
    // console.log(projectTitle);
    let projectIndex = 0;
    for (const projectData of allProjectsArray) {
        // console.log(project);
        // console.log(project.projectTitle);
        if (projectTitle == projectData.projectTitle) {
            // console.log("Found Project!");
            return { projectData, projectIndex };
        }
        projectIndex++;
    }
}

const editTask = (editedTask) => {
    // console.log(editedTask);
    // DON'T FORGET THIS RETURNS AN OBJECT
    let projectObj = getProjectFromTitle(editedTask.taskProject);
    let project = projectObj.projectData;
    let projectIndex = projectObj.projectIndex
    // console.log(project);
    let i = 0;
    project.projectTaskArray.forEach((task) => {
        if (task.taskID === editedTask.taskID) {
            // console.log(task);
            allProjectsArray[projectIndex].projectTaskArray[i] = editedTask;
            // console.log(allProjectsArray[projectIndex].projectTaskArray);
        }
        i++;
    })
}

const getProjectList = () => {
    let projectList = [];
    allProjectsArray.forEach((project) => {
        projectList.push(project.projectTitle);
    })
    return projectList;
}

const changeTaskProject = (previousProjectTitle, editedTask) => {
    let newProjectTitle = editedTask.taskProject
    // Retrieve Previous project Data
    // DON'T FORGET THIS RETURNS AN OBJECT
    let previousProjectData = getProjectFromTitle(previousProjectTitle);
    // Retrieve newly chosen project data
    // DON'T FORGET THIS RETURNS AN OBJECT
    let newProjectData = getProjectFromTitle(newProjectTitle);
    
    console.log(previousProjectData);
    console.log(newProjectData);


    // deleteTask(editedTask, previousProjectTitle);

    for (let i = 0; i < previousProjectData.projectData.projectTaskArray.length; i++) {
        let task = previousProjectData.projectData.projectTaskArray[i];
        console.log(task);
        // split array at edited task
        if (task.taskID === editedTask.taskID) {
            previousProjectData.projectData.projectTaskArray.splice(i, 1);
        }

        // pop task from array
        // concat arrays 
    }
    newProjectData.projectData.projectTaskArray.push(editedTask);
}

const deleteTask = (deletedTask) => {
    console.log(deletedTask);
    // DON'T FORGET THIS RETURNS AN OBJECT
    let project = getProjectFromTitle(deletedTask.taskProject);
    console.log(project);
    console.log(project.projectData.projectTaskArray);
    let i = 0;
    project.projectData.projectTaskArray.forEach((task) => {
        if (task.taskID === deletedTask.taskID) {
            project.projectData.projectTaskArray.splice(i, 1);
        }
        i++;
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
    // DON'T FORGET THIS RETURNS AN OBJECT
    getProjectFromTitle,
    editTask,
    getProjectList,
    changeTaskProject,
    deleteTask,
}; 
  
