function displayProjectTasks(project) {
    function displayTaskCard(title, description, dueDate, createDate, priority, ID, project) {
        const displayContainer = document.querySelector('main');
        // displayContainer.innerHTML = "";
        const taskCard = document.createElement('div');
        taskCard.classList.add('taskCard');
        const taskTitle = document.createElement('h2');
        taskTitle.textContent = `Project Name: ${title}`;
        const taskDescription = document.createElement('p');
        taskDescription.textContent = `Description: ${description}`;

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
        taskDueDate.innerText = dueDate;                            //`${simpleDueDate.m}/${simpleDueDate.d}/${simpleDueDate.y}`;

        const taskCreateDate = document.createElement('p');
        taskCreateDate.innerText = createDate;                      // simpleCreateDate;

        const taskPriority = document.createElement('p');           //Maybe replace this is color coded img
        taskPriority.innerText = `Priority: ${priority}`;

        const taskID = document.createElement('div');
        taskID.value = ID;

        const taskProject = document.createElement('p');
        taskProject.innerText = project;

        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskCreateDate);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(taskID);
        taskCard.appendChild(taskProject);

        displayContainer.appendChild(taskCard);
    };
    
    project.forEach(task => {
        console.log(task);
        displayTaskCard(task.taskTitle, task.taskDescription, task.taskPriority);
    });
};

export default displayProjectTasks;

