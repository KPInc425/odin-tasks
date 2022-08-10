import createTask from './createTask';
import displayProjectTasks from './displayProjectTasks';
import showTasksEditButtonEL from './showTasksEditButtons_EL';
import { replaceProjectData, getDefaultProjectTasks, getDefaultProject } from './projectArray.js'; 
import displayProjectTitle from './displayProjectTitle';
import { populateStorage } from './localStorageFunctions';

function simpleNewTaskEventListener() {

    // let localProjectArray = projectArray();

    let defaultProject = getDefaultProject();
    console.log(defaultProject);

    // Get Refs to main container
    const displayContainer = document.querySelector('main');

    // Get Refs to input textbox and btn
    const btnNewTask = document.querySelector('.btnNewTask');
    const inputNewTask = document.getElementById('simpleNewTaskInput');

    btnNewTask.addEventListener('click', () => {
        let newTask = createTask(inputNewTask.value); 
        // Add Task to default project
        defaultProject.addTaskToProject(newTask);
        // Replace project data on master array (Check if this is actually doing anything)
        replaceProjectData(defaultProject, 0);

        // console.log(projectArray)
        displayContainer.innerHTML = "";
        inputNewTask.value = "";
        // displayProjectTasks(defaultProject.projectTaskArray);
        displayProjectTitle(defaultProject.projectTitle);
        displayProjectTasks(getDefaultProjectTasks());

        // showTasksEditButtonEL();

        
    });
};

export default simpleNewTaskEventListener;