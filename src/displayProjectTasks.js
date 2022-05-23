function displayProjectTasks(project) {

    // Create and Display task card elements
    function displayTaskCard(title, description, dueDate, createDate, priority, ID, project) {
        // Get main content container ref
        const displayContainer = document.querySelector('main');
        // displayContainer.innerHTML = "";

        // Create Card Div
        const taskCard = document.createElement('div');
        taskCard.classList.add('card');

        const taskTitleLabel = document.createElement('h2')
        taskTitleLabel.textContent = 'Task Title:'
        const taskTitle = document.createElement('h2');
        taskTitle.id = 'taskTitle';
        taskTitle.textContent = `${title}`;


        const taskDescriptionLabel = document.createElement('p');
        taskDescriptionLabel.textContent = 'Description:'
        taskDescriptionLabel.classList.add('description');
        const taskDescription = document.createElement('p');
        taskDescription.classList.add('description');
        taskDescription.textContent = `${description}`;

        // Make into helper module
        // function displayFriendlyDate(date) {
        //     date = date;
        //     y = date.getFullYear();
        //     m = date.getMonth();
        //     d = date.getDate();

        //     return {y,m,d};
        // }

        // simpleDueDate = displayFriendlyDate(dueDate);
        // simpleCreateDate = displayFriendlyDate(createDate);

        const taskDueDate = document.createElement('div');
        taskDueDate.classList.add('date');
        taskDueDate.innerText = `DueDate: ${dueDate}`;                            //`${simpleDueDate.m}/${simpleDueDate.d}/${simpleDueDate.y}`;

        const taskCreateDate = document.createElement('p');
        taskCreateDate.innerText = `Creation Date: ${createDate}`;                      // simpleCreateDate;

        const taskPriority = document.createElement('p');           //Maybe replace this is color coded img
        taskPriority.innerText = `Priority: ${priority}`;

        const taskID = document.createElement('div');
        taskID.setAttribute('data-id', ID);

        const taskProject = document.createElement('p');
        taskProject.innerText = `Project: ${project}`;

        taskCard.appendChild(taskTitleLabel);
        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescriptionLabel);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskCreateDate);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(taskProject);
        taskCard.appendChild(taskID);


        displayContainer.appendChild(taskCard);
    };
    
    // Iterate through each task and display card
    project.forEach(task => {
        console.log(task);
        displayTaskCard(task.taskTitle, task.taskDescription, task.taskDueDate, task.taskCreateDate, task.taskPriority, task.taskID, task.taskProject);
    });
};

export default displayProjectTasks;

