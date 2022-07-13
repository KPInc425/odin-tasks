function displayProjectTasks(project) {

    // Create and Display task card elements
    function displayTaskCard(title, description, dueDate, createDate, priority, ID, project) {
        // Get main content container ref
        const displayContainer = document.querySelector('main');
        

        // Create Card Div
        const taskCard = document.createElement('div');
        taskCard.classList.add('card');

        // Display Title
        const taskTitleContainer = document.createElement('div');
        taskTitleContainer.classList.add('taskTitleContainer');
        taskTitleContainer.classList.add('taskGridData');
        const taskTitle = document.createElement('h2');
        taskTitle.id = 'taskTitle';
        taskTitle.textContent = `${title}`;

        taskTitleContainer.appendChild(taskTitle);


        // Display Description
        const taskDescriptionContainer = document.createElement('div');
        taskDescriptionContainer.classList.add('taskDescriptionContainer');
        taskDescriptionContainer.classList.add('taskGridData');
        const taskDescription = document.createElement('p');
        taskDescription.classList.add('description');
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

        // Display Due Date
        const taskDueDateLabel = document.createElement('h2');
        taskDueDateLabel.classList.add('taskGridData');
        taskDueDateLabel.innerText = 'Due Date';


        const taskDueDate = document.createElement('div');
        taskDueDate.classList.add('dueDate');
        taskDueDate.classList.add('taskGridData');
        taskDueDate.innerText = `${dueDate}`;                            //`${simpleDueDate.m}/${simpleDueDate.d}/${simpleDueDate.y}`;

        // Display Start Date
        const taskCreateDateLabel = document.createElement('h2');
        taskCreateDateLabel.classList.add('taskGridData');
        taskCreateDateLabel.innerText = 'Start Date';
        const taskCreateDate = document.createElement('p');
        taskCreateDate.classList.add('startDate');
        taskCreateDate.classList.add('taskGridData');
        taskCreateDate.innerText = `${createDate}`;                      // simpleCreateDate;

        // Display Priority
        const taskPriortyContainer = document.createElement('div');
        taskPriortyContainer.classList.add('taskPriorityContainer');
        taskPriortyContainer.classList.add('taskGridData');
        const taskPriority = document.createElement('p');           //Maybe replace this is color coded img
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
        taskCard.appendChild(taskCreateDate);
        taskCard.appendChild(taskDueDateLabel);
        taskCard.appendChild(taskDueDate);
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

