function displayEditTaskButtons(card) {
    console.log("Initiate Edit Task...");
    console.log(card);

    // Get nodelist of buttons
    const btnCheckArray = card.querySelectorAll('.taskGridButtons');

    // console.log(btnCheckArray);
    // Check if buttons already exist
    if (!btnCheckArray.length > 0) {



        // Get nodelist editable items
        const editableItemsNodelist = document.querySelectorAll('.card .editableItem');
        console.log(editableItemsNodelist);

        // let editableItemsArray = [];

        // editableItemsNodelist.forEach((nodeItem) => {
        //     editableItemsArray.push(nodeItem);
        // });

        // console.log(editableItemsArray);

        if (editableItemsNodelist.length >= 6) {
            // Initialize Array for edit button count
            var editableItemsObject = {
                "title": "",
                "description": "",
                "startDate": "",
                "dueDate": "",
                "priority": "",
                "project": "",
            };
        } else {
            var editableItemsObject = {
                "title": "",
                "description": "",
                "priority": "",
            };
        }

        let editableItemsStringArray = [];

        // Add innerHTML of each item for plain string array of editable items
        let i = 0;
        editableItemsNodelist.forEach((nodeItem) => {
            editableItemsStringArray.push(nodeItem.innerHTML);
            i++;
        });

        //console.log(editableItemsStringArray);

        let keys = Object.keys(editableItemsObject);
        console.log(keys);

        let j = 0;
        for (const property in editableItemsObject) {
            console.log(`editableItemsObject.${property} = ${editableItemsObject[property]}`);
            editableItemsObject[property] = editableItemsStringArray[j];
            j++;
        }

        console.log(editableItemsObject);



        card.classList.add('taskGrid');

        // for (let i = 0; i < editableItemsNodelist.length; i++) {
        //     eval(`const btnEditTask${editableItemsStringArray[i]} = document.createElement('button');`);  
        // }

        function capitalizeFirstLetterOfString(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        let tempKey = capitalizeFirstLetterOfString(keys[0]);

        eval(`var btnEditTask${tempKey} = document.createElement('button');`);
        //console.log(tempKey);
        // const btnEditTaskTitle = document.createElement('button');
        // tempVariableName = document.createElement('button');
        eval(`btnEditTask${tempKey}.innerText = '+';`)
        // tempVariableName.innerText = "+";
        tempVariableName.classList.add('taskGridButtons');
        tempVariableName.classList.add('editTaskTitle');
        tempVariableName.setAttribute('title', 'Edit Task Title');
        // btnEditTaskTitle.innerText = "+";
        // btnEditTaskTitle.classList.add('taskGridButtons');
        // btnEditTaskTitle.classList.add('editTaskTitle');
        // btnEditTaskTitle.setAttribute('title', 'Edit Task Title');
    
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
    
        card.appendChild(btnEditTaskTitle);
        card.appendChild(btnEditTaskDescription);
        card.appendChild(btnEditTaskStartDate);
        card.appendChild(btnEditTaskDueDate);
        card.appendChild(btnEditTaskPriority);
        card.appendChild(btnEditTaskProject);
    
        
    
        // Get Card Unique ID
        const cardID = card.querySelector('[data-id]').getAttribute('data-id');
        console.log(cardID);
    
        let cardTitleContainer = card.querySelector('div.taskTitleContainer');
        // split title from label, this won't be needed when labels are isolated on cards
        // cardTitle = cardTitle.split(':');
        console.log(cardTitleContainer);
    
        // const cardDescription = card.querySelector
    
        // Create Edit task form
        // const editTaskForm = document.createElement('form');
        // editTaskForm.setAttribute('name', 'editTaskForm');
        // editTaskForm.setAttribute('action', 'get');
        // editTaskForm.classList.add('editcard');
    
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