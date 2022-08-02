import _ from 'lodash';
import greeting from './greeting.js';
import displayTaskMainMenu from './displayTaskMainMenu.js';
import displayCreateSimpleTask from './displayCreateSimpleTask.js';
import displayProjectTitle from './displayProjectTitle.js';
import displayProjectTasks from './displayProjectTasks.js';
import mainMenuEventListener from './mainMenu_EL.js';
import simpleNewTaskEventListener from './newSimpleTask_EL.js';
import allProjectsEventListener from './allProjects_EL.js';
import showTasksEditButtonEL from './showTasksEditButtons_EL.js';
import * as allProjectData from './projectArray.js';

import './reset.css';
import './style.css';


// const app = (() => {

    // Initialize Project Arrays
    allProjectData.loadProjectData();
    // Testing
    allProjectData.addNewProjectToArray('Another New Project');
    allProjectData.addNewProjectToArray('Test Project');
    
    // localProjectArray.push(createProject('Simple Project'));
    // localProjectArray.push(createProject('Test Project'));
    // Testing
    let localProjectArray = allProjectData.projectArray();
    let completedProjectArray = [];
    
    
    // Create and Add default task to default project, If statement
    // goes here to check for saved data
    // if no data
    // projectArray.push(createProject('Default Project'));
    // projectArray[0].addTaskToProject(createTask());
    // else 
    // load data



    // console.log(projectArray);

    // get main container Ref's
    const headerContainer = document.querySelector('header');
    const mainContainer = document.querySelector('main');
    const footerContainer = document.querySelector('footer');

    // Display simple task creator elements
    headerContainer.appendChild(displayCreateSimpleTask());
    
    // Display Main Menu
    displayTaskMainMenu(headerContainer);

    // Display All Projects
    // displayProjectLibrary(projectArray, mainContainer);

    // Display Default Tasks for default project
    displayProjectTitle(localProjectArray[0].projectTitle);
    displayProjectTasks(localProjectArray[0].projectTaskArray); 

    // Listen for button push and add to default project
    simpleNewTaskEventListener();
    // simpleNewTaskEventListener(localProjectArray[0]);
    allProjectsEventListener(localProjectArray);
    //Dropdown Menu event listener
    mainMenuEventListener();
    // Add EventListeners to show edit buttons when clicked
    showTasksEditButtonEL();

    // window.addEventListener('click', (e) => {
    //     console.log(e.target);
    // })
    // let newTask = createTask();
// })();
