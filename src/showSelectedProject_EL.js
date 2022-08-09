import displayProjectTasks from "./displayProjectTasks.js";
import displayProjectTitle from "./displayProjectTitle.js";
import showTasksEditButtonEL from "./showTasksEditButtons_EL.js";
import { getProjectFromTitle } from "./projectArray.js";

function showSelectedProjectTasksEL (projectArray) {

    // Get nodelist of all Project Cards
    const cardNodeArray = document.querySelectorAll('.projectCard');
    // Save nodelist to array
    const cardArray = Array.from(cardNodeArray);

    // Add Eventlisteners to each card to display selected project
    cardArray.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();

            // console.log("Clicked the Project Card!");
            // console.log(card);
            // Get project title from selected card
            let projectTitle = card.querySelector('.projectTitle').innerHTML;
            // console.log(projectTitle);
            // Get project with title from Master project array
            let selectedProject = getProjectFromTitle(projectTitle).projectData;

            // Display project cards from selected project
            displayProjectTitle(selectedProject.projectTitle)
            // console.log(selectedProject.projectTaskArray);
            displayProjectTasks(selectedProject.projectTaskArray);

            // Event listeners for edit buttons
            showTasksEditButtonEL();


        })
    })
}

export default showSelectedProjectTasksEL;