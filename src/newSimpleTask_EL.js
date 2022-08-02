import createTask from './createTask';
import displayProjectTasks from './displayProjectTasks';
import showTasksEditButtonEL from './showTasksEditButtons_EL';
import * as allProjectData from './projectArray.js';

function simpleNewTaskEventListener() {

    let localProjectArray = allProjectData.projectArray();

    let defaultProject = localProjectArray[0];

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
        allProjectData.replaceProjectData(defaultProject, 0);

        // console.log(projectArray)
        displayContainer.innerHTML = "";
        inputNewTask.value = "";
        // displayProjectTasks(defaultProject.projectTaskArray);
        displayProjectTasks(allProjectData.getDefaultProjectTasks());
        showTasksEditButtonEL();

        
    });
};

export default simpleNewTaskEventListener;