import displayEditProjectButtons from "./displayEditProjectButtons";
import { appendEditedProjectElement } from "./el_addSelectedProjectElement";

function showProjectsEditButton_EL() {
    console.log('el for project edit buttons');
    // const mainContainer = document.querySelector('main');
    const cardNodeArray = document.querySelectorAll(".projectCard");
    const cardArray = Array.from(cardNodeArray);
    let previousID;
    let previousCard;

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

                    // These need to be built still
                    // let editedProject = createProjectFromProjectCardData(previousCard);
                    // console.log(editedTask);

                    // editProject(editedProject);
                    previousCard = undefined;
                    }
                // saveProjectsToLocal();
            }
            const buttons = card.querySelectorAll('.projectGridButtons');
            if (buttons.length < 1) {
                // Display Edit Buttons
                displayEditProjectButtons(card);
                previousID = cardID;
                previousCard = card;
            }   


            // Toggles Show class when clicking anywhere ELSE on window
            window.addEventListener('click', (e) => {
                console.log('window click');
                removeProjectEditButtons(e);
                appendEditedProjectElement(e);
            })
        }, {once: false});
    });
}

export {
    showProjectsEditButton_EL,
    appendEditedProjectElement,
};