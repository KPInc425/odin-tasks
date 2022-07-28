import _ from 'lodash';
import greeting from './greeting';
import displayTaskMainMenu from './displayTaskMainMenu';
import createTask from './createTask';
import displayCreateSimpleTask from './displayCreateSimpleTask';
import createProject from './createProject';
import displayProjectLibrary from './displayProjectLibrary';
import displayProjectTitle from './displayProjectTitle';
import displayProjectTasks from './displayProjectTasks';
import mainMenuEventListener from './mainMenu_EL';
import simpleNewTaskEventListener from './newTask_EL';
import allProjectsEventListener from './allProjects_EL';
import showTasksEditButtonEL from './showTasksEditButtons_EL';

import './reset.css';
import './style.css';


// const app = (() => {

    // Initialize Project Arrays
    let projectArray = [];
    let completedProjectArray = [];
    
    // Create and Add default task to default project, If statement
    // goes here to check for saved data
    // if no data
    projectArray.push(createProject('Default Project'));
    projectArray[0].addTaskToProject(createTask());
    // else 
    // load data


    // Testing
    projectArray.push(createProject('Simple Project'));
    projectArray.push(createProject('Test Project'));
    // Testing
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
    displayProjectTitle(projectArray[0].projectTitle);
    displayProjectTasks(projectArray[0].projectTaskArray); //projectArray[0].projectTaskArray,
    // console.log(projectArray[0].projectTaskArray);

    // Add Event listeners
    // mainMenuEventListener();
    simpleNewTaskEventListener(projectArray[0]);
    allProjectsEventListener(projectArray);
    //Dropdown Menu event listener
    mainMenuEventListener();
    // Add EventListeners to show edit buttons when clicked
    showTasksEditButtonEL();

    // window.addEventListener('click', (e) => {
    //     console.log(e.target);
    // })
    // let newTask = createTask();
// })();
