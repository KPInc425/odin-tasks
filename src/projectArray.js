import createProject from "./createProject";
import createTask from "./createTask";
import { populateStorage } from "./localStorageFunctions";


let allProjectsArray = [];

const loadProjectData = (savedData) => {
    // if no data exists
    // console.log(savedData);
    if (savedData != undefined) {
        console.log('Something Local Incoming');
        savedData.forEach((project) => {
            allProjectsArray.push(project);
            // console.log(project);
        })
    } else {
        allProjectsArray.push(createProject('Default Project'));
        allProjectsArray[0].addTaskToProject(createTask('Default Task', 'Default Description'));

    }
}

const addNewProjectToArray = (project) => {
    allProjectsArray.push(project);
    // populateStorage(allProjectsArray);
}

const addNewTask = (projectIndex, newTask) => {
    // console.log(newTask);
    // console.log(projectIndex);
    // console.log(allProjectsArray[projectIndex]);
    if (!(newTask == undefined)) {
        allProjectsArray[projectIndex].addTaskToProject(newTask)
    } else {
        allProjectsArray[projectIndex].addTaskToProject(createTask())
    }

}

const getProjectTasks = (projectIndex) =>{
    return allProjectsArray[projectIndex].projectTaskArray;
}

const getProjectsArray = () => {
    return allProjectsArray;
}   

const replaceProjectData = (newProjectData, index) => {
    allProjectsArray[index] = newProjectData;
    // populateStorage(allProjectsArray);
    
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
    console.log(projectTitle);
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
const editProject = (editedProject, previousProjectTitle) => {
    console.log(editedProject);
    console.log(previousProjectTitle);
    // DON'T FORGET THIS RETURNS AN OBJECT
    let projectObj = getProjectFromTitle(previousProjectTitle);
    console.log(projectObj);
    let projectIndex = projectObj.projectIndex
    // console.log(project);
    
    allProjectsArray[projectIndex].projectTitle = editedProject.projectTitle;
    allProjectsArray[projectIndex].projectDescription = editedProject.projectDescription;
    allProjectsArray[projectIndex].projectPriority = editedProject.projectPriority;
    console.log(allProjectsArray);
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
        // console.log(task);
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
    // console.log(deletedTask);
    // DON'T FORGET THIS RETURNS AN OBJECT
    let project = getProjectFromTitle(deletedTask.taskProject);
    // console.log(project);
    // console.log(project.projectData.projectTaskArray);
    let i = 0;
    project.projectData.projectTaskArray.forEach((task) => {
        if (task.taskID === deletedTask.taskID) {
            project.projectData.projectTaskArray.splice(i, 1);
        }
        i++;
    })
}
 const saveProjectsToLocal = () => {
    populateStorage(allProjectsArray);
 };

export {
    loadProjectData,
    getProjectsArray,
    addNewProjectToArray,
    addNewTask,
    replaceProjectData,
    getDefaultProjectTasks,
    getDefaultProject,
    // DON'T FORGET THIS RETURNS AN OBJECT
    getProjectFromTitle,
    editTask,
    editProject,
    getProjectList,
    changeTaskProject,
    deleteTask,
    getProjectTasks,
    saveProjectsToLocal
}; 
  
