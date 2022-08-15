import createTask from './createTask';
import displayProjectTasks from './displayProjectTasks';
import showTasksEditButtonEL from './showTasksEditButtons_EL';
import { replaceProjectData, getDefaultProjectTasks, getDefaultProject, saveProjectsToLocal, getProjectFromTitle, addNewTask } from './projectArray.js'; 
import displayProjectTitle from './displayProjectTitle';
import { populateStorage } from './localStorageFunctions';

function simpleNewTaskEventListener() {

    // let localProjectArray = projectArray();

    let defaultProject = getDefaultProject();
    // console.log(defaultProject);

    // Get Refs to main container
    const displayContainer = document.querySelector('main');

    // Get Refs to input textbox and btn
    const btnNewTask = document.querySelector('.btnNewTask');
    const inputNewTask = document.getElementById('simpleNewTaskInput');

    btnNewTask.addEventListener('click', () => {
        const projectTitle = document.querySelector('#projectTitleLabel > h2').textContent;
        console.log(projectTitle);
        let newTask = createTask(inputNewTask.value, 'New Description', projectTitle); 
        let projectToEdit = getProjectFromTitle(projectTitle)
        if (projectTitle == 'All Projects') {
            newTask.projectTitle = defaultProject.projectTitle;
            addNewTask(0, newTask);
            displayContainer.innerHTML = "";
            inputNewTask.value = "";
            displayProjectTitle(defaultProject.projectTitle);
            displayProjectTasks(defaultProject.projectTaskArray);
            saveProjectsToLocal();

        } else {
            addNewTask(projectToEdit.projectIndex, newTask);
            displayContainer.innerHTML = "";
            inputNewTask.value = "";
            displayProjectTitle(projectTitle);
            displayProjectTasks(projectToEdit.projectData.projectTaskArray);
            saveProjectsToLocal();
        }

        // Add Task to default project
        // getDefaultProject().addTaskToProject(newTask);
        
        // defaultProject.addTaskToProject(newTask);
        // Replace project data on master array (Check if this is actually doing anything)
        // replaceProjectData(defaultProject, 0);

        // console.log(projectArray)
        // displayContainer.innerHTML = "";
        // inputNewTask.value = "";
        // displayProjectTasks(defaultProject.projectTaskArray);
        // displayProjectTitle(projectTitle);
        // displayProjectTasks(projectToEdit.projectData.projectTaskArray);

        // saveProjectsToLocal();

        // showTasksEditButtonEL();

        
    });
};

export default simpleNewTaskEventListener;