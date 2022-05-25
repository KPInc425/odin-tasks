function displayEditTaskButtons(taskCard) {
    console.log("Initiate Edit Task...");
    console.log(taskCard);

    const btnCheckArray = taskCard.querySelectorAll('.taskGridButtons');

    // console.log(btnCheckArray);
    // Check if buttons already exist
    if (!btnCheckArray.length > 0) {
        taskCard.classList.add('taskGrid');

        const btnEditTaskTitle = document.createElement('button');
        btnEditTaskTitle.innerText = "+";
        btnEditTaskTitle.classList.add('taskGridButtons');
        btnEditTaskTitle.classList.add('editTaskTitle');
    
        const btnEditTaskDescription = document.createElement('button');
        btnEditTaskDescription.innerText = "+";
        btnEditTaskDescription.classList.add('taskGridButtons');
        btnEditTaskDescription.classList.add('editTaskDescription');
    
        const btnEditTaskStartDate = document.createElement('button');
        btnEditTaskStartDate.innerText = "+";
        btnEditTaskStartDate.classList.add('taskGridButtons');
        btnEditTaskStartDate.classList.add('editTaskStartDate');
    
        const btnEditTaskDueDate = document.createElement('button');
        btnEditTaskDueDate.innerText = "+";
        btnEditTaskDueDate.classList.add('taskGridButtons');
        btnEditTaskDueDate.classList.add('editTaskStartDate');
    
        const btnEditTaskPriority = document.createElement('button');
        btnEditTaskPriority.innerText = "+";
        btnEditTaskPriority.classList.add('taskGridButtons');
        btnEditTaskPriority.classList.add('editTaskStartDate');
    
        const btnEditTaskProject = document.createElement('button');
        btnEditTaskProject.innerText = "+";
        btnEditTaskProject.classList.add('taskGridButtons');
        btnEditTaskProject.classList.add('editTaskStartDate');
    
        taskCard.appendChild(btnEditTaskTitle);
        taskCard.appendChild(btnEditTaskDescription);
        taskCard.appendChild(btnEditTaskStartDate);
        taskCard.appendChild(btnEditTaskDueDate);
        taskCard.appendChild(btnEditTaskPriority);
        taskCard.appendChild(btnEditTaskProject);
    
        
    
        // Get Card Unique ID
        const cardID = taskCard.querySelector('[data-id]').getAttribute('data-id');
        console.log(cardID);
    
        let cardTitleContainer = taskCard.querySelector('div.taskTitleContainer');
        // split title from label, this won't be needed when labels are isolated on cards
        // cardTitle = cardTitle.split(':');
        console.log(cardTitleContainer);
    
        // const cardDescription = taskCard.querySelector
    
        // Create Edit task form
        // const editTaskForm = document.createElement('form');
        // editTaskForm.setAttribute('name', 'editTaskForm');
        // editTaskForm.setAttribute('action', 'get');
        // editTaskForm.classList.add('editTaskCard');
    
        // const editTaskTitleInput = document.createElement('input');
        // editTaskTitleInput.setAttribute('placeholder', cardTitle);
    
        // const editTaskDescription = document.createElement('input');
        // editTaskDescription.setAttribute('placeholder', )
    
        // editTaskForm.appendChild(editTaskTitleInput);
    
        // return editTaskForm;
    
        // console.log(editTaskTitleInput);
    }


}

export default displayEditTaskButtons;