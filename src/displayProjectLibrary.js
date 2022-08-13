import displayNewTaskButton from "./displayNewTaskButton";

function displayProjectLibrary(projectLibrary, displayContainer) {
    
    function createProjectCard(title, description, priority, ID) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('projectCard');
        projectCard.classList.add('projectGridData');
        projectCard.classList.add(`${priority.toLowerCase()}Priority`);

        const projectTitleContainer = document.createElement('div');
        projectTitleContainer.classList.add('projectTitleContainer');
        projectTitleContainer.classList.add('projectGridData');
        const projectTitle = document.createElement('h2');
        projectTitle.classList.add('projectTitle');
        projectTitle.textContent = `${title}`;

        projectTitleContainer.appendChild(projectTitle);

        // Display Description
        const projectDescriptionContainer = document.createElement('div');
        projectDescriptionContainer.classList.add('projectDescriptionContainer');
        projectDescriptionContainer.classList.add('projectGridData');
        const projectDescription = document.createElement('p');
        projectDescription.classList.add('projectGridData');
        projectDescription.classList.add('projectDescription');
        projectDescription.textContent = `${description}`;

        projectDescriptionContainer.appendChild(projectDescription);


        
        const projectPriorityContainer = document.createElement('div');
        projectPriorityContainer.classList.add('projectPriortyContainer');
        projectPriorityContainer.classList.add('projectGridData');
        const projectPriority = document.createElement('p'); //Maybe replace this is color coded img
        projectPriority.classList.add('projectGridData');
        projectPriority.classList.add('projectPriority');
        projectPriority.innerText = `${priority} Priority`;
        projectPriorityContainer.appendChild(projectPriority);

        // Create Element for Hidden Project ID
        const projectID = document.createElement('div');
        projectID.setAttribute('data-id', ID)

        projectCard.appendChild(projectTitleContainer);
        projectCard.appendChild(projectDescriptionContainer);
        projectCard.appendChild(projectPriorityContainer);
        projectCard.appendChild(projectID);

        displayContainer.appendChild(projectCard);
        
    };
    
    projectLibrary.forEach(project => {
        // console.log(project);
        createProjectCard(project.projectTitle, project.projectDescription, project.projectPriority, project.projectID);

    });

    // allProjectsEventListener();

    displayNewTaskButton();


};

export default displayProjectLibrary;

