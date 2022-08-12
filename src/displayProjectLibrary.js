import displayNewTaskButton from "./displayNewTaskButton";

function displayProjectLibrary(projectLibrary, displayContainer) {
    
    function createProjectCard(title, description, priority, ID) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('projectCard');
        projectCard.classList.add('projectGridData');
        const projectTitle = document.createElement('h2');
        projectTitle.classList.add('projectTitle');
        projectTitle.textContent = `${title}`;

        const projectDescription = document.createElement('p');
        projectDescription.classList.add('projectGridData');
        projectDescription.textContent = `${description}`;
        

        const projectPriority = document.createElement('p'); //Maybe replace this is color coded img
        projectPriority.classList.add('projectGridData');
        projectPriority.innerText = `${priority}`;

        // Create Element for Hidden Project ID
        const projectID = document.createElement('div');
        projectID.setAttribute('data-id', ID)

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(projectPriority);
        projectCard.appendChild(projectID);

        displayContainer.appendChild(projectCard);
        
    };
    
    projectLibrary.forEach(project => {
        // console.log(project);
        createProjectCard(project.projectTitle, project.projectDescription, project.projectPriority, project.projectID);

    });

    displayNewTaskButton();


};

export default displayProjectLibrary;

