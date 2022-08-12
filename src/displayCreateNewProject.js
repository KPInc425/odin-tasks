import createFullNewProject from "./createFullNewProject";
import displayProjectTasks from "./displayProjectTasks";
import displayProjectTitle from "./displayProjectTitle";
import GenerateUniqueID from "./generateUniqueID";
import { addNewProjectToArray, getProjectFromTitle, saveProjectsToLocal } from "./projectArray";

const displayCreateNewProject = () => {
    const displayContainer = document.querySelector('main');
    let isNewProjectOpen = false;
    let projectToDisplay;

    const projectCard = document.createElement('div');
    projectCard.id = GenerateUniqueID();
    projectCard.classList.add('newProjectCard');
    projectCard.classList.add('projectGridData');
    const inputProjectTitle = document.createElement('input');
    inputProjectTitle.type = 'text';
    inputProjectTitle.classList.add('projectTitle');
    inputProjectTitle.placeholder = `Enter Project Title`;

    const projectDescription = document.createElement('input');
    projectDescription.type = 'text'
    projectDescription.classList.add('projectGridData');
    projectDescription.classList.add('projectDescription');
    projectDescription.placeholder = `Enter Description Here`;
    
    // const projectPriority = document.createElement('input'); //Maybe replace this is color coded img
    // projectPriority.type = 'text';
    // projectPriority.classList.add('projectGridData');
    // projectPriority.placeholder = `Enter Description Here`;

    // console.log('Display Radio Buttons');
    // create Radio Buttons container
    const priorityInputForm = document.createElement('div');
    priorityInputForm.classList.add('inputPriorityForm');
    priorityInputForm.classList.add('projectGridData');
    // create btn Buttons for Priority Choices
    const btnLowPriority = document.createElement('button');
    btnLowPriority.textContent = "Low";
    btnLowPriority.value = "Low";
    btnLowPriority.name = "priority";
    // btnLowPriority.checked = "checked";

    const btnMediumPriority = document.createElement('button');
    btnMediumPriority.textContent = "Medium";
    btnMediumPriority.value = "Medium";
    btnMediumPriority.name = "priority";

    const btnHighPriority = document.createElement('button');
    btnHighPriority.textContent = "High";
    btnHighPriority.value = "High";
    btnHighPriority.name = "priority";

    priorityInputForm.appendChild(btnLowPriority);
    priorityInputForm.appendChild(btnMediumPriority);
    priorityInputForm.appendChild(btnHighPriority);

    let btnsArray = [btnLowPriority,btnMediumPriority,btnHighPriority];

    btnsArray.forEach((btn) => {
        btn.addEventListener('click', () => {
            console.log("clicked btn");
            console.log(projectCard);
            console.log(btn.value);
            let chosenPriority = btn.value;
            console.log(chosenPriority);
            priorityInputForm.setAttribute('data-priority', chosenPriority);
            projectCard.classList.remove('lowPriority');
            if (chosenPriority == 'High') {
                projectCard.classList.remove('lowPriority');
                projectCard.classList.remove('mediumPriority');
                // taskCard.classList.remove('highPriority');
                projectCard.classList.add('highPriority');
            } else if (chosenPriority == 'Medium') {
                // taskCard.style.backgroundColor = "rgba(180, 182, 50, 0.719);;"
                projectCard.classList.remove('lowPriority');
                // taskCard.classList.remove('mediumPriority');
                projectCard.classList.remove('highPriority');
                projectCard.classList.add('mediumPriority');
            } else if (chosenPriority == 'Low') {
                // taskCard.style.backgroundColor = "rgba(58, 207, 233, 0.637);"
                // taskCard.classList.remove('lowPriority');
                projectCard.classList.remove('mediumPriority');
                projectCard.classList.remove('highPriority');
                projectCard.classList.add('lowPriority');
            }
        })
    })

    // Create Save/Cancel buttons container
    const containerNewProjectBtns = document.createElement('div');
    containerNewProjectBtns.classList.add('newTasksBtnsContainer');

    
    // Create Save/Cancel buttons
    const btnSaveNewProject = document.createElement('button');
    btnSaveNewProject.classList.add('btnSaveNewProject');
    btnSaveNewProject.textContent = 'Save Task';

    containerNewProjectBtns.appendChild(btnSaveNewProject);

    const btnCancelNewTask = document.createElement('button');
    btnCancelNewTask.classList.add('btnCancelNewTask');
    btnCancelNewTask.textContent = 'Cancel';

    containerNewProjectBtns.appendChild(btnCancelNewTask);



    btnCancelNewTask.addEventListener('click', () => {
        // newTaskCard.classList.add('hidden');
        projectCard.remove();
        isNewProjectOpen = false;
    })

    btnSaveNewProject.addEventListener('click', () => {
        let newProject = createFullNewProject(projectCard);
        // let projectToDisplay;
        // let projectToAddTask;
        // console.log(newProject);
        // console.log(getProjectFromTitle(newProject.projectTitle));
        // Check if project already exists
        if (getProjectFromTitle(newProject.projectTitle) != undefined) {
            alert('That title is already used, try again');
        } else {
            // create new project on mainArray
            addNewProjectToArray(newProject);
            projectToDisplay = getProjectFromTitle(newProject.projectTitle).projectData;
            projectCard.remove();
            isNewProjectOpen = false;
        }

        displayProjectTitle(newProject.projectTitle);
        console.log(projectToDisplay);
        displayProjectTasks(projectToDisplay.projectTaskArray);

        saveProjectsToLocal();
    });
    projectCard.appendChild(inputProjectTitle);
    projectCard.appendChild(projectDescription);
    // projectCard.appendChild(projectPriority);
    projectCard.appendChild(priorityInputForm);

    projectCard.appendChild(containerNewProjectBtns);
    displayContainer.appendChild(projectCard);
}

export default displayCreateNewProject;