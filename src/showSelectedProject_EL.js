import displayProjectTasks from "./displayProjectTasks.js";
import displayProjectTitle from "./displayProjectTitle.js";
import showTasksEditButtonEL from "./showTasksEditButtons_EL.js";
import { getProjectFromTitle } from "./projectArray.js";
import displayEditProjectButtons from "./displayEditProjectButtons.js";

function showSelectedProjectTasksEL (projectArray) {

    // Get nodelist of all Project Cards
    const cardNodeArray = document.querySelectorAll('.projectCard');
    // Save nodelist to array
    const cardArray = Array.from(cardNodeArray);

    // Add Eventlisteners to each card to display selected project
    cardArray.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();

            displayEditProjectButtons(card);
            // console.log('click');

            card.addEventListener('dblclick', (e) => {
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

            window.addEventListener('click', (event) => {
                // console.log(event.target);
                if (!event.target.matches('.projectCard')) {
                    console.log("NOT CARD!");
                    let buttons = card.querySelectorAll(".projectGridButtons");
                    // console.log(buttons);
                    let i;
                    for (i = 0; i < buttons.length; i++) {
                        let shownButton = buttons[i];
                        console.log(shownButton);
                        shownButton.remove()
                    }
                    card.classList.remove('cardGrid');
                };                
            }, {once: true})
        })
    })
}

export default showSelectedProjectTasksEL;