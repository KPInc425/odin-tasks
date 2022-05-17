import _ from 'lodash';
import greeting from './greeting';
import displayTaskMainMenu from './displayTaskMainMenu';
import createTask from './createTask';
import displayCreateSimpleTask from './displayCreateSimpleTask';
import createProject from './createProject';
import displayProjectLibrary from './displayProjectLibrary';
import displayProjectTasks from './displayProjectTasks';
import './reset.css';
import './style.css';


// const app = (() => {

    let projectArray = [];
    projectArray.push(createProject('Default Project'));

    // Testing
    projectArray.push(createProject('Simple Project'));
    projectArray.push(createProject('Test Project'));
    // Testing
    console.log(projectArray);

    // get main container Ref's
    const headerContainer = document.querySelector('header');
    const mainContainer = document.querySelector('main');
    const footerContainer = document.querySelector('footer');

    headerContainer.appendChild(displayCreateSimpleTask());


    displayTaskMainMenu(headerContainer);

    // displayProjectLibrary(projectArray, mainContainer);
    displayProjectTasks(projectArray[0].projectTaskArray, 'main');



    // Testing
    // function component() {
    //     const element = document.createElement('div');
    //     const p = document.createElement('p');
    //     const btn = document.createElement('button');
    
    //     // Lodash, now imported by this script
    //     p.textContent = greeting('KP');
    
    //     btn.innerText = 'Click me!';
    //     btn.addEventListener('click', () => {
    //         console.log('You Clicked it!');
    //     })
    //     // btn.onclick = printMe;
    
    //     element.appendChild(p);
    //     element.appendChild(btn);
    
    //     return element;
    // }
    // headerContainer.appendChild(component());
    // Testing

    function mainMenuEventListener() {
        const menuButton = document.querySelector('.dropDownButton');
        const dropDownMenuContainer = document.querySelector('.dropDownContent');

        menuButton.addEventListener('click', () => {
            dropDownMenuContainer.classList.toggle('show');
        });
        // Toggles Show class when clicking anywhere ELSE on window
        window.onclick = function(event) {
            if (!event.target.matches('.dropDownButton')) {
                const dropdowns = document.getElementsByClassName("dropDownContent");
                let i;
                for (i = 0; i < dropdowns.length; i++) {
                    let openDropDown = dropdowns[i];
                    if (openDropDown.classList.contains('show')) {
                        openDropDown.classList.remove('show');
                    }
                }
            }
        }
    };

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
            mainContainer.innerHTML = "";
            displayProjectTasks(projectArray[0].projectTaskArray);
        });
    };

    mainMenuEventListener();
    newTaskEventListener();

    // let newTask = createTask();
// })();
