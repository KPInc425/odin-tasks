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
    let projectIndex = 0;
    for (const project of allProjectsArray) {
        // console.log(project);
        // console.log(project.projectTitle);
        if (projectTitle == project.projectTitle) {
            console.log("Found Project!");
            return { project, projectIndex };
        }
        projectIndex++;
    }
}

const editTask = (editedTask) => {
    console.log(editedTask);
    let projectData = getProjectFromTitle(editedTask.taskProject);
    let project = projectData.project;
    let projectIndex = projectData.projectIndex
    console.log(project);
    let i = 0;
    project.projectTaskArray.forEach((task) => {
        if (task.taskID === editedTask.taskID) {
            // console.log(task);
            allProjectsArray[projectIndex].projectTaskArray[i] = editedTask;
            console.log(allProjectsArray[projectIndex].projectTaskArray);
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
    let previousProjectData = getProjectFromTitle(previousProjectTitle);
    // Retrieve newly chosen project data
    let newProjectData = getProjectFromTitle(newProjectTitle);
    
    console.log(previousProjectData);
    console.log(newProjectData);

    for (let i = 0; i < previousProjectData.project.projectTaskArray.length; i++) {
        let task = previousProjectData.project.projectTaskArray[i];
        console.log(task);
        // split array at edited task
        if (task.taskID === editedTask.taskID) {
            previousProjectData.project.projectTaskArray.splice(i, 1);
        }

        // pop task from array
        // concat arrays 
    }

    newProjectData.project.projectTaskArray.push(editedTask);
    


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
    getProjectList,
    changeTaskProject,
}; 
  
