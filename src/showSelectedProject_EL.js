import displayProjectTasks from "./displayProjectTasks.js";
import displayProjectTitle from "./displayProjectTitle.js";
import showTasksEditButtonEL from "./showTasksEditButtons_EL.js";
import { getProjectFromTitle, getProjectFromIndex } from "./projectArray.js";

function showSelectedProjectTasksEL (projectArray) {

    // Get nodelist of all Project Cards
    const cardNodeArray = document.querySelectorAll('.projectCard');
    // Save nodelist to array
    const cardArray = Array.from(cardNodeArray);

    // Add Eventlisteners to each card to display selected project
    cardArray.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();

            console.log("Clicked the Project Card!");
            console.log(card);
            // Get project title from selected card
            let projectTitle = card.querySelector('.projectTitle').innerHTML;
            console.log(projectTitle);
            let selectedProject = getProjectFromTitle(projectTitle);


            
            // search through projectArray for selected title
            // let index = 0;
            // for (const project of projectArray) {
            //     // console.log(project.projectTitle);
            //     if (projectTitle === project.projectTitle) {
            //         break;
            //     }
            //     index++;
            // }

            // console.log(projectArray[index]);
            displayProjectTitle(selectedProject.projectTitle)
            console.log(selectedProject.projectTaskArray);
            displayProjectTasks(selectedProject.projectTaskArray);
            showTasksEditButtonEL();


        })
    })
}

export default showSelectedProjectTasksEL;