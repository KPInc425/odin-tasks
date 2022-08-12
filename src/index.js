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
import displayNewTaskButton from './displayNewTaskButton.js';

import './reset.css';
import './style.css';
import el_displayNewTaskCard from './el_displayNewTaskCard.js';
import { checkLocalStorage, importMainProjectsArray, populateStorage } from './localStorageFunctions.js';
import deleteAllTasks from './el_deleteAllTasks.js';

if (checkLocalStorage()) {
    if (localStorage.length > 0) {
        console.log("Something in Local");
        
        // Initialize Project Arrays
        allProjectData.loadProjectData(importMainProjectsArray());
    } else {
        console.log("nothing in localStorage");
        // Initialize Project Arrays
        allProjectData.loadProjectData();
    }
};

let localProjectArray = allProjectData.getProjectsArray();
console.log(localProjectArray);
let completedProjectArray = [];

// get header container Ref
const headerContainer = document.querySelector('header');

// Display simple task creator elements
headerContainer.appendChild(displayCreateSimpleTask());

// Display Main Menu
displayTaskMainMenu(headerContainer);

// Display All Projects
// displayProjectLibrary(projectArray, mainContainer);

// Display Default Tasks for default project
displayProjectTitle(localProjectArray[0].projectTitle);
displayProjectTasks(localProjectArray[0].projectTaskArray); 
// displayNewTaskButton();
// el_displayNewTaskCard();

// Listen for button push and add to default project
simpleNewTaskEventListener();
// simpleNewTaskEventListener(localProjectArray[0]);
allProjectsEventListener(localProjectArray);
//Dropdown Menu event listener
mainMenuEventListener();
deleteAllTasks();

// Add EventListeners to show edit buttons when clicked
showTasksEditButtonEL();
