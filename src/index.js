import _ from 'lodash';
import greeting from './greeting';
import createTask from './createTask';
import displayCreateSimpleTask from './displayCreateSimpleTask';
import createProject from './createProject';
import './reset.css';
import './style.css';


// const app = (() => {

    let projectArray = [];

    

    function component() {
        const element = document.createElement('div');
        const btn = document.createElement('button');
    
        // Lodash, now imported by this script
        element.textContent = greeting('KP');
    
        btn.innerText = 'Click me and check the console!';
        btn.addEventListener('click', () => {
            let newTask = createTask();
            let newProject = createProject();
            newProject.addTaskToProject(newTask);
            console.log(newProject);
        })
        // btn.onclick = printMe;
    
        element.appendChild(btn);
    
        return element;
    }
    document.body.appendChild(component());
    document.body.appendChild(displayCreateSimpleTask());

    function newTaskEventListener() {
        const btnNewTask = document.querySelector('.btnNewTask');
        btnNewTask.addEventListener('click', () => {
            let newTask = createTask(); 
            let newProject = createProject();
            newProject.addTaskToProject(newTask);
            // console.log(newProject);
            projectArray.push(newProject);
            console.log(projectArray)
        })
    }

    newTaskEventListener();

    // let newTask = createTask();
// })();
