function displayProjectTasks(project) {

    // Get main content container ref
    const displayContainer = document.querySelector('main');
    displayContainer.innerHTML = "";

    // Create and Display task card elements
    function displayTaskCard(title, description, dueDate, createDate, priority, ID, project) {
        
        

        // Create Card Div
        const taskCard = document.createElement('div');
        taskCard.classList.add('card');

        // Display Title
        const taskTitleContainer = document.createElement('div');
        taskTitleContainer.classList.add('taskTitleContainer');
        taskTitleContainer.classList.add('taskGridData');
        const taskTitle = document.createElement('h2');
        taskTitle.classList.add('taskTitle');
        taskTitle.textContent = `${title}`;

        taskTitleContainer.appendChild(taskTitle);


        // Display Description
        const taskDescriptionContainer = document.createElement('div');
        taskDescriptionContainer.classList.add('taskDescriptionContainer');
        taskDescriptionContainer.classList.add('taskGridData');
        const taskDescription = document.createElement('p');
        taskDescription.classList.add('taskDescription');
        taskDescription.textContent = `${description}`;

        taskDescriptionContainer.appendChild(taskDescription);

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

        // Display Due Date Label
        const taskDueDateLabel = document.createElement('h2');
        taskDueDateLabel.classList.add('taskGridData');
        taskDueDateLabel.innerText = 'Due Date';

        // Display Due Date
        const taskDueDateContainer = document.createElement('div');
        taskDueDateContainer.classList.add('taskGridData');
        taskDueDateContainer.classList.add('taskDueDateContainer');
        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('taskDueDate');
        taskDueDate.innerText = `${dueDate}`;                            //`${simpleDueDate.m}/${simpleDueDate.d}/${simpleDueDate.y}`;
        taskDueDateContainer.appendChild(taskDueDate);

        // Display Start Date Label
        const taskCreateDateLabel = document.createElement('h2');
        taskCreateDateLabel.classList.add('taskGridData');
        taskCreateDateLabel.innerText = 'Start Date';

        // Display Start Date
        const taskCreateDateContainer = document.createElement('div');
        taskCreateDateContainer.classList.add('taskGridData');
        taskCreateDateContainer.classList.add('taskStartDateContainer');

        const taskCreateDate = document.createElement('p');
        taskCreateDate.classList.add('taskStartDate');
        taskCreateDate.classList.add('taskGridData');
        taskCreateDate.innerText = `${createDate}`;                      // simpleCreateDate;
        taskCreateDateContainer.appendChild(taskCreateDate);

        // Display Priority
        const taskPriortyContainer = document.createElement('div');
        taskPriortyContainer.classList.add('taskPriorityContainer');
        taskPriortyContainer.classList.add('taskGridData');
        const taskPriority = document.createElement('p');           //Maybe replace this is color coded img
        taskPriority.classList.add('taskPriority');
        taskPriority.innerText = `${priority} Priority`;

        taskPriortyContainer.appendChild(taskPriority);
        
        // Style based on priority
        if (priority === 'High') {
            taskCard.classList.toggle('highPriorty');
        } else if (priority === 'Medium') {
            taskCard.classList.toggle('mediumPriorty');
        } else {
            taskCard.classList.toggle('lowPriorty');
        }

        // Display Task Project text
        const taskProjectContainer = document.createElement('div');
        taskProjectContainer.classList.add('taskProjectContainer')
        taskProjectContainer.classList.add('taskGridData');
        const taskProject = document.createElement('p');
        taskProject.classList.add('taskProject');
        taskProject.innerText = `This is part of the ${project} project.`;

        taskProjectContainer.appendChild(taskProject);

        // Create Element for Hidden task ID
        const taskID = document.createElement('div');
        taskID.setAttribute('data-id', ID);



        // taskCard.appendChild(taskTitleLabel);
        taskCard.appendChild(taskTitleContainer);
        // taskCard.appendChild(taskDescriptionLabel);
        taskCard.appendChild(taskDescriptionContainer);
        taskCard.appendChild(taskCreateDateLabel);
        taskCard.appendChild(taskCreateDateContainer);
        taskCard.appendChild(taskDueDateLabel);
        taskCard.appendChild(taskDueDateContainer);
        taskCard.appendChild(taskPriortyContainer);
        taskCard.appendChild(taskProjectContainer);
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

