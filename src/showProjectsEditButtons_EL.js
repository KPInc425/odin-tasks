import createProjectFromProjectCardData from "./createProjectFromProjectCardData";
import displayEditProjectButtons from "./displayEditProjectButtons";
import { appendEditedProjectElement } from "./el_addSelectedProjectElement";
import { editProject, saveProjectsToLocal } from "./projectArray";

function showProjectsEditButton_EL() {
    console.log('el for project edit buttons');
    // const mainContainer = document.querySelector('main');
    const cardNodeArray = document.querySelectorAll(".projectCard");
    const cardArray = Array.from(cardNodeArray);
    let previousID;
    let previousCard;
    let previousProjectTitle;

    const removeProjectEditButtons = (e) => {
        e.preventDefault();
        let cards = document.querySelectorAll(".projectCard");
        let buttons = document.querySelectorAll(".projectGridButtons");
        let btnDelete = document.querySelector('.deleteProject');
    
        if (btnDelete != null) {
            btnDelete.remove();
        }
        
        //remove edit buttons 
        for (let i = 0; i < buttons.length; i++) {
            let shownButton = buttons[i];
            shownButton.remove()
        }
        //remove grid styling
        cards.forEach((card) => {
            card.classList.remove('cardGrid');
        });
        previousID = undefined;
    }
    
    console.log(cardArray);

    cardArray.forEach((card) => {
        card.addEventListener('click', (e) => {
            console.log(card.id)
            e.stopPropagation();

            // Get Card Unique ID
            const cardID = card.querySelector('[data-id]').getAttribute('data-id');
            console.log(cardID);
            if (!(previousID == undefined)) {
                if (!(cardID == previousID)) {
                    removeProjectEditButtons(e);
                    appendEditedProjectElement(e);

                    
                    let editedProject = createProjectFromProjectCardData(previousCard);
                    console.log(editedProject);
                    editProject(editedProject, previousProjectTitle);
                    // editProject(editedProject);
                    previousCard = undefined;
                    previousProjectTitle = undefined;
                    }
                saveProjectsToLocal();
            }

            // Check if buttons exist > show if not
            const buttons = card.querySelectorAll('.projectGridButtons');
            if (buttons.length < 1) {
                // Display Edit Buttons
                displayEditProjectButtons(card);
                previousID = cardID;
                previousCard = card;
                previousProjectTitle = card.querySelector('.projectTitle').textContent;
                console.log(previousProjectTitle);
            }   


            // Toggles Show class when clicking anywhere ELSE on window
            window.addEventListener('click', (e) => {
                console.log('window click');
                removeProjectEditButtons(e);
                appendEditedProjectElement(e);



                if (!(previousCard == undefined)) {

                    let editedProject = createProjectFromProjectCardData(previousCard);
                    console.log(editedProject);
                    editProject(editedProject, previousProjectTitle);

                    previousCard = undefined;
                    previousProjectTitle = undefined;

                saveProjectsToLocal();
                }
                
            })
        }, {once: false});
    });
}

export {
    showProjectsEditButton_EL,
    appendEditedProjectElement,
};