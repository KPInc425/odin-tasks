function displayProjectTitle(projectTitle) {
    // Get main content container ref
    const displayContainer = document.getElementById('projectTitleLabel');
    displayContainer.innerHTML = "";
    // displayContainer.classList.toggle("hidden");
    const projectLabel = document.createElement('h2');
    // projectLabel.id = "projectTitleLabel";
    // console.log(projectTitle);
    projectLabel.textContent = projectTitle; 

    displayContainer.appendChild(projectLabel);
}

export default displayProjectTitle;