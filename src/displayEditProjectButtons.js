function displayEditProjectButtons(projectCard) {
    console.log("Initiate Edit Project...");
    console.log(projectCard);

    const btnCheckArray = projectCard.querySelectorAll('.ProjectGridButtons');

    // console.log(btnCheckArray);
    // Check if buttons already exist
    if (!btnCheckArray.length > 0) {
        projectCard.classList.add('ProjectGrid');

        const btnEditProjectTitle = document.createElement('button');
        btnEditProjectTitle.innerText = "+";
        btnEditProjectTitle.classList.add('ProjectGridButtons');
        btnEditProjectTitle.classList.add('editProjectTitle');
        btnEditProjectTitle.setAttribute('title', 'Edit Project Title');
    
        const btnEditProjectDescription = document.createElement('button');
        btnEditProjectDescription.innerText = "+";
        btnEditProjectDescription.classList.add('ProjectGridButtons');
        btnEditProjectDescription.classList.add('editProjectDescription');
        btnEditProjectDescription.setAttribute('title', 'Edit Project Description');
    
        // const btnEditProjectStartDate = document.createElement('button');
        // btnEditProjectStartDate.innerText = "+";
        // btnEditProjectStartDate.classList.add('ProjectGridButtons');
        // btnEditProjectStartDate.classList.add('editProjectStartDate');
        // btnEditProjectStartDate.setAttribute('title', 'Edit Project Start Date');
    
        // const btnEditProjectDueDate = document.createElement('button');
        // btnEditProjectDueDate.innerText = "+";
        // btnEditProjectDueDate.classList.add('ProjectGridButtons');
        // btnEditProjectDueDate.classList.add('editProjectDueDate');
        // btnEditProjectDueDate.setAttribute('title', 'Edit Project Due Date');
    
        const btnEditProjectPriority = document.createElement('button');
        btnEditProjectPriority.innerText = "+";
        btnEditProjectPriority.classList.add('ProjectGridButtons');
        btnEditProjectPriority.classList.add('editProjectPriority');
        btnEditProjectPriority.setAttribute('title', 'Edit Project Priority');
    
        // const btnEditProjectProject = document.createElement('button');
        // btnEditProjectProject.innerText = "+";
        // btnEditProjectProject.classList.add('ProjectGridButtons');
        // btnEditProjectProject.classList.add('editProjectProject');
        // btnEditProjectProject.setAttribute('title', 'Edit Project Project');
    
        projectCard.appendChild(btnEditProjectTitle);
        projectCard.appendChild(btnEditProjectDescription);
        // projectCard.appendChild(btnEditProjectStartDate);
        // projectCard.appendChild(btnEditProjectDueDate);
        projectCard.appendChild(btnEditProjectPriority);
        // projectCard.appendChild(btnEditProjectProject);
    
        
    
        // Get Card Unique ID
        const cardID = projectCard.querySelector('[data-id]').getAttribute('data-id');
        console.log(cardID);
    
        let cardTitleContainer = projectCard.querySelector('div.ProjectTitleContainer');
        // split title from label, this won't be needed when labels are isolated on cards
        // cardTitle = cardTitle.split(':');
        console.log(cardTitleContainer);
    
        // const cardDescription = projectCard.querySelector
    
        // Create Edit Project form
        // const editProjectForm = document.createElement('form');
        // editProjectForm.setAttribute('name', 'editProjectForm');
        // editProjectForm.setAttribute('action', 'get');
        // editProjectForm.classList.add('editprojectCard');
    
        // const editProjectTitleInput = document.createElement('input');
        // editProjectTitleInput.setAttribute('placeholder', cardTitle);
    
        // const editProjectDescription = document.createElement('input');
        // editProjectDescription.setAttribute('placeholder', )
    
        // editProjectForm.appendChild(editProjectTitleInput);
    
        // return editProjectForm;
    
        // console.log(editProjectTitleInput);
    }


}

export default displayEditProjectButtons;