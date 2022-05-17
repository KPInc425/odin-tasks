function displayProjectLibrary(projectLibrary, displayContainer) {
    
    function createProjectCard(title, description, priority) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        const projectTitle = document.createElement('h2');
        projectTitle.textContent = `Project Name: ${title}`;
        const projectDescription = document.createElement('p');
        projectDescription.textContent = `Description: ${description}`;
        const projectPriority = document.createElement('p'); //Maybe replace this is color coded img
        projectPriority.innerText = `Priority: ${priority}`;

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(projectPriority);

        displayContainer.appendChild(projectCard);
    };
    
    projectLibrary.forEach(project => {
        console.log(project);
        createProjectCard(project.projectTitle, project.projectDescription, project.projectPriority);

    });
};

export default displayProjectLibrary;

