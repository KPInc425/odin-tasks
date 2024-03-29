import createFullNewTask from "./createFullNewTask";
import createProject from "./createProject";
import displayProjectTasks from "./displayProjectTasks";
import displayProjectTitle from "./displayProjectTitle";
import GenerateUniqueID from "./generateUniqueID";
import { addNewProjectToArray, addNewTask, getProjectFromTitle, getProjectList, getProjectTasks, saveProjectsToLocal } from "./projectArray";

const displayNewTaskCard = () => {
    const btnNewTask = document.querySelector('.newTaskButton');
    const mainContainer = document.querySelector('main');
    let isNewTaskOpen = false;

    btnNewTask.addEventListener('click', () => {
        // console.log('click');
        // Generate new Task ID
        let taskID = GenerateUniqueID();
        // let userInputElements = [];
        

        if (isNewTaskOpen == false) {
            isNewTaskOpen = true;
        // Create new cardContainer Element
        const newTaskCard = document.createElement('div');
        newTaskCard.classList.add('card');
        newTaskCard.classList.add('newTaskCard');
        newTaskCard.setAttribute('data-id', taskID);
        newTaskCard.id = taskID;

        // Create Label for New Task Card
        const newTaskCardLabel = document.createElement('h2');
        newTaskCardLabel.textContent = 'New Task Data';
        newTaskCardLabel.classList.add('newTaskCardLabel');

        newTaskCard.appendChild(newTaskCardLabel);

        // Display Title Input
        const userInputTitle = document.createElement('input');
        userInputTitle.type = 'text';
        userInputTitle.classList.add('userTextInput');
        userInputTitle.classList.add('taskTitle');
        userInputTitle.placeholder = 'Enter Task Title';

        newTaskCard.appendChild(userInputTitle);
        // userInputElements.push(userInputTitle);

        // Display description
        const userInputDescription = document.createElement('input');
        userInputDescription.type = 'text';
        userInputDescription.classList.add('userTextInput');
        userInputDescription.classList.add('taskDescription');
        userInputDescription.placeholder = 'Enter Task Description';

        newTaskCard.appendChild(userInputDescription);
        // userInputElements.push(userInputDescription);

        // Display startDate Label
        const newStartDateLabel = document.createElement('h2');
        newStartDateLabel.textContent = 'Start Date';
        newStartDateLabel.classList.add('newStartDateLabel');

        newTaskCard.appendChild(newStartDateLabel);
    
        // Display StartDate Input
        // set timeZone offset
        let txOffset = (new Date()).getTimezoneOffset() * 60000
        // Formate Date into  datetime-local format (ISO)
        const todaysDate = new Date();
        let isoDate = new Date(todaysDate - txOffset).toISOString().slice(0,16);

        // console.log(isoDate);

        const newStartDateInput = document.createElement('input');
        newStartDateInput.classList.add('newStartDateInput');
        newStartDateInput.classList.add('taskStartDate');
        newStartDateInput.type = 'datetime-local';
        newStartDateInput.value = isoDate;

        newTaskCard.appendChild(newStartDateInput);

        // Display new dueDate label
        const newDueDateLabel = document.createElement('h2');
        newDueDateLabel.textContent = 'Due Date';
        newDueDateLabel.classList.add('newDueDateLabel');

        newTaskCard.appendChild(newDueDateLabel);

        // Display Duedate input
        const tomorrow = new Date(todaysDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        let newDueDate = new Date(tomorrow - txOffset).toISOString().slice(0,16);
        const newDueDateInput = document.createElement('input');
        newDueDateInput.classList.add('newDueDateInput');
        newDueDateInput.classList.add('taskDueDate');
        newDueDateInput.type = 'datetime-local';
        newDueDateInput.value = newDueDate;

        newTaskCard.appendChild(newDueDateInput);

        // Display priority inputs

        // create Priority Buttons container
        const btnInputForm = document.createElement('form');
        btnInputForm.classList.add('inputPriorityForm');
        btnInputForm.classList.add('taskPriority');
        // create btn Buttons for Priority Choices
        const btnLowPriority = document.createElement('button');
        // btnLowPriority.type = "btn";
        btnLowPriority.value = "Low";
        btnLowPriority.textContent = "Low";
        btnLowPriority.name = "priority";
        // btnLowPriority.checked = "checked";

        const btnMediumPriority = document.createElement('button');
        // btnMediumPriority.type = "btn";
        btnMediumPriority.value = "Medium";
        btnMediumPriority.textContent = "Medium";
        btnMediumPriority.name = "priority";

        const btnHighPriority = document.createElement('button');
        // btnHighPriority.type = "btn";
        btnHighPriority.value = "High";
        btnHighPriority.textContent = "High";
        btnHighPriority.name = "priority";

        btnInputForm.appendChild(btnLowPriority);
        btnInputForm.appendChild(btnMediumPriority);
        btnInputForm.appendChild(btnHighPriority);

        let btnArray = [btnLowPriority,btnMediumPriority,btnHighPriority];

        btnArray.forEach((btn) => {
            btn.addEventListener('click', () => {
                // console.log("clicked btn");
                // console.log(newTaskCard);
                // console.log(btn.value);
                let chosenPriority = btn.value;
                btnInputForm.setAttribute('data-priority', chosenPriority);
                // console.log(chosenPriority);
                newTaskCard.classList.remove('lowPriority');
                if (chosenPriority == 'High') {
                    newTaskCard.classList.remove('lowPriority');
                    newTaskCard.classList.remove('mediumPriority');
                    // taskCard.classList.remove('highPriority');
                    newTaskCard.classList.add('highPriority');
                } else if (chosenPriority == 'Medium') {
                    // taskCard.style.backgroundColor = "rgba(180, 182, 50, 0.719);;"
                    newTaskCard.classList.remove('lowPriority');
                    // taskCard.classList.remove('mediumPriority');
                    newTaskCard.classList.remove('highPriority');
                    newTaskCard.classList.add('mediumPriority');
                } else if (chosenPriority == 'Low') {
                    // taskCard.style.backgroundColor = "rgba(58, 207, 233, 0.637);"
                    // taskCard.classList.remove('lowPriority');
                    newTaskCard.classList.remove('mediumPriority');
                    newTaskCard.classList.remove('highPriority');
                    newTaskCard.classList.add('lowPriority');
                }
            })
        })

        newTaskCard.appendChild(btnInputForm);

        // Display Project dropdown with choices and new project choice
        let userInputProjectSelection = document.createElement('select');
        userInputProjectSelection.classList.add('userProjectInput');
        userInputProjectSelection.classList.add('taskProject');
        // userInputProjectSelection.placeholder = elementToEdit.textContent.substr(16);

        let currentProjectList = getProjectList();
        let temp;

        // add options using main project array
        for (let i = 0; i < currentProjectList.length; i++) {
            temp = document.createElement('option');
            temp.value = currentProjectList[i];
            temp.className = 'projectChoice';
            temp.textContent = currentProjectList[i];

            userInputProjectSelection.appendChild(temp);
        }
        // Add New Project option
        const newProjectChoice = document.createElement('option');
        newProjectChoice.value = 'New Project+';
        newProjectChoice.className = 'projectChoice';
        newProjectChoice.textContent = 'New Project+';
        userInputProjectSelection.appendChild(newProjectChoice);

        newTaskCard.appendChild(userInputProjectSelection);

        // append container for new project to keep order on newTaskCard
        const newProjectInputContainer = document.createElement('div');
        newProjectInputContainer.classList.add('projectInputContainer');

        newTaskCard.appendChild(newProjectInputContainer);

        const newProjectInput = document.createElement('input');
        newProjectInput.type = 'text';
        newProjectInput.classList.add('userProjectInput');
        newProjectInput.classList.add('taskProject');
        newProjectInput.placeholder = 'Enter New Project Name';

        // eventlistener to check if New Project+ is selected from dropdown
        userInputProjectSelection.addEventListener('change', (e) => {
            console.log('changed!');
            console.log(e.target.value);
            if (e.target.value == 'New Project+') {
                console.log('Create New Project');
                // Switch classes to new element
                userInputProjectSelection.classList.remove('userProjectInput')
                userInputProjectSelection.classList.remove('taskProject')

                newProjectInputContainer.appendChild(newProjectInput);
            } else {
                newProjectInput.remove();
                // Switch classes back to Select element
                if (userInputProjectSelection.className != 'userProjectInput') {
                    userInputProjectSelection.classList.add('userProjectInput');
                    userInputProjectSelection.classList.add('taskProject');
                }
            }
        })

        // Create Save/Cancel buttons container
        const containerNewTaskBtns = document.createElement('div');
        containerNewTaskBtns.classList.add('newTasksBtnsContainer');

        
        // Create Save/Cancel buttons
        const btnSaveNewTask = document.createElement('button');
        btnSaveNewTask.classList.add('btnSaveNewTask');
        btnSaveNewTask.textContent = 'Save Task';

        containerNewTaskBtns.appendChild(btnSaveNewTask);

        const btnCancelNewTask = document.createElement('button');
        btnCancelNewTask.classList.add('btnCancelNewTask');
        btnCancelNewTask.textContent = 'Cancel';

        containerNewTaskBtns.appendChild(btnCancelNewTask);

        newTaskCard.appendChild(containerNewTaskBtns);

        mainContainer.appendChild(newTaskCard);

        btnCancelNewTask.addEventListener('click', () => {
            // newTaskCard.classList.add('hidden');
            newTaskCard.remove();
            isNewTaskOpen = false;
        })

        btnSaveNewTask.addEventListener('click', () => {
            let newTask = createFullNewTask(newTaskCard);
            let projectToAddTask;
            console.log(newTask);
            console.log(getProjectFromTitle(newTask.taskProject));
            // Check if project already exists
            if (getProjectFromTitle(newTask.taskProject) != undefined) {
                // add to existing project
                projectToAddTask = getProjectFromTitle(newTask.taskProject);
                addNewTask(projectToAddTask.projectIndex, newTask);
                // console.log(projectToAddTask.projectData);
                

            } else {
                // create new project on mainArray
                let projectToAdd = createProject(newTask.taskProject);
                addNewProjectToArray(projectToAdd);
                projectToAddTask = getProjectFromTitle(newTask.taskProject);

                // add newTask to newly created project
                addNewTask(projectToAddTask.projectIndex, newTask);
                // console.log(projectToAddTask.projectData);
            }
            newTaskCard.remove();
            isNewTaskOpen = false;
            displayProjectTitle(newTask.taskProject);
            displayProjectTasks(getProjectTasks(projectToAddTask.projectIndex));

            saveProjectsToLocal();


        })
            
        }
        
    });
}

export default displayNewTaskCard;