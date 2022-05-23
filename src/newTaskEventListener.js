import createTask from './createTask';
import displayProjectTasks from './displayProjectTasks';

function simpleNewTaskEventListener(defaultProject) {
    // Get Refs to main container
    const displayContainer = document.querySelector('main');
    // Get Refs to input textbox and btn
    const btnNewTask = document.querySelector('.btnNewTask');
    const inputNewTask = document.getElementById('simpleNewTaskInput');

    btnNewTask.addEventListener('click', () => {
        let newTask = createTask(inputNewTask.value); 
        // Add Task to default project
        defaultProject.addTaskToProject(newTask);
        // console.log(projectArray)
        displayContainer.innerHTML = "";
        displayProjectTasks(defaultProject.projectTaskArray);
    });
};

export default simpleNewTaskEventListener;