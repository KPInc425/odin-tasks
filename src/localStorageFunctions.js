import createProject from "./createProject";
import createTask from "./createTask";

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


const checkLocalStorage = () => {
    if (storageAvailable('sessionStorage')) {
        console.log('Local Storage is Available');
        return true;
    } else {
        console.log('No Local Storage Available');
        return false;
    }
}

const populateStorage = (projectsArray) => {
    // BLUNT FORCE METHOD SHOULD LIKELY BE CLEANED UP FOR MORE SPECIFICITY
    sessionStorage.clear();
    let projectIndex = 0;
    
    console.log(projectsArray);
    for (const project of projectsArray) {
        // console.log(project.projectTaskArray);
        sessionStorage.setItem(`localProjectsArray[${projectIndex}]`, JSON.stringify(project));
        projectIndex++
    }
    // console.log(sessionStorage);
}

const importMainProjectsArray = () => {

    // tmp variables for project Arrays initialized
    let mainProjectsArray = [];
    let tmpProjectsArr = [];

    // increment through each stored project
    for (let i = 0; i < sessionStorage.length; i++) {
        // parse data into temp variable
        let tmpProject = JSON.parse(sessionStorage.getItem(`localProjectsArray[${i}]`));
        // console.log(tmpProject);
        tmpProjectsArr.push(tmpProject);
    }

    // increment through newly created array with projectData
    tmpProjectsArr.forEach((project) => {
        // console.log(project);
        // recreate each project to add back functionality
        let newProject = createProject(project.projectTitle, project.projectDescription, project.projectPriority);
        
        // increment through projectTaskArray 
        project.projectTaskArray.forEach((task) => {
            // recreate each task to add back functionality
            let newTask = createTask(task.taskTitle, task.taskDescription, task.taskProject, 
                                     task.taskDueDate, task.taskPriority, task.taskCreateDate,
                                     task.taskID);
            // Add recreated task to project
            newProject.addTaskToProject(newTask);
        });

        // Append to main array
        mainProjectsArray.push(newProject);

    })

    // console.log("Load Local Storage")
    // console.log(mainProjectsArray);
    // pass main array back for loading data
    return mainProjectsArray;
}

export {
    checkLocalStorage,
    populateStorage,
    importMainProjectsArray,
}