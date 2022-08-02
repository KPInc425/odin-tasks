import addEditButtonSelectedEL from "./addEditButtonsSelected_EL";

function displayEditTaskButtons(taskCard) {
    // console.log("Initiate Edit Task...");
    // console.log(taskCard);

    const btnCheckArray = taskCard.querySelectorAll('.taskGridButtons');

    // console.log(btnCheckArray);
    // Check if buttons already exist
    if (!btnCheckArray.length > 0) {
        taskCard.classList.add('cardGrid');

        const btnEditTaskTitle = document.createElement('button');
        btnEditTaskTitle.innerText = "+";
        btnEditTaskTitle.classList.add('taskGridButtons');
        btnEditTaskTitle.classList.add('editTaskTitle');
        btnEditTaskTitle.setAttribute('title', 'Edit Task Title');
    
        const btnEditTaskDescription = document.createElement('button');
        btnEditTaskDescription.innerText = "+";
        btnEditTaskDescription.classList.add('taskGridButtons');
        btnEditTaskDescription.classList.add('editTaskDescription');
        btnEditTaskDescription.setAttribute('title', 'Edit Task Description');
    
        const btnEditTaskStartDate = document.createElement('button');
        btnEditTaskStartDate.innerText = "+";
        btnEditTaskStartDate.classList.add('taskGridButtons');
        btnEditTaskStartDate.classList.add('editTaskStartDate');
        btnEditTaskStartDate.setAttribute('title', 'Edit Task Start Date');
    
        const btnEditTaskDueDate = document.createElement('button');
        btnEditTaskDueDate.innerText = "+";
        btnEditTaskDueDate.classList.add('taskGridButtons');
        btnEditTaskDueDate.classList.add('editTaskDueDate');
        btnEditTaskDueDate.setAttribute('title', 'Edit Task Due Date');
    
        const btnEditTaskPriority = document.createElement('button');
        btnEditTaskPriority.innerText = "+";
        btnEditTaskPriority.classList.add('taskGridButtons');
        btnEditTaskPriority.classList.add('editTaskPriority');
        btnEditTaskPriority.setAttribute('title', 'Edit Task Priority');
    
        const btnEditTaskProject = document.createElement('button');
        btnEditTaskProject.innerText = "+";
        btnEditTaskProject.classList.add('taskGridButtons');
        btnEditTaskProject.classList.add('editTaskProject');
        btnEditTaskProject.setAttribute('title', 'Edit Task Project');
    
        taskCard.appendChild(btnEditTaskTitle);
        taskCard.appendChild(btnEditTaskDescription);
        taskCard.appendChild(btnEditTaskStartDate);
        taskCard.appendChild(btnEditTaskDueDate);
        taskCard.appendChild(btnEditTaskPriority);
        taskCard.appendChild(btnEditTaskProject);

        // Add Button Event Listeners
        addEditButtonSelectedEL(taskCard);
        
    } else {
        console.log("Edits buttons exist for this card");
    }


}

export default displayEditTaskButtons;