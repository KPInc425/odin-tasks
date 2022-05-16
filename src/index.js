import _ from 'lodash';
import greeting from './greeting';
import createTask from './createTask';
import displayCreateSimpleTask from './displayCreateSimpleTask';
import createProject from './createProject';
import displayProjectLibrary from './displayProjectLibrary';
import './reset.css';
import './style.css';


// const app = (() => {

    let projectArray = [];
    projectArray.push(createProject('Default Project'));
    console.log(projectArray);

    // get main container Ref's
    const headerContainer = document.querySelector('header');
    const mainContainer = document.querySelector('main');
    const footerContainer = document.querySelector('footer');

    headerContainer.appendChild(displayCreateSimpleTask());
    displayProjectLibrary(projectArray, mainContainer);

    // Testing
    function component() {
        const element = document.createElement('div');
        const p = document.createElement('p');
        const btn = document.createElement('button');
    
        // Lodash, now imported by this script
        p.textContent = greeting('KP');
    
        btn.innerText = 'Click me!';
        btn.addEventListener('click', () => {
            console.log('You Clicked it!');
        })
        // btn.onclick = printMe;
    
        element.appendChild(p);
        element.appendChild(btn);
    
        return element;
    }
    headerContainer.appendChild(component());
    // Testing



    function newTaskEventListener() {
        // Get Refs to input textbox and btn
        const btnNewTask = document.querySelector('.btnNewTask');
        const inputNewTask = document.getElementById('simpleNewTaskInput');
        // console.log(inputNewTask)
        btnNewTask.addEventListener('click', () => {
            let newTask = createTask(inputNewTask.value); 
            // let newProject = createProject();
            // newProject.addTaskToProject(newTask);
            // console.log(newProject);

            // Add Task to default project
            projectArray[0].addTaskToProject(newTask);
            // console.log(projectArray)
        })
    }

    newTaskEventListener();

    // let newTask = createTask();
// })();
