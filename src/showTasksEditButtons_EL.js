import displayEditTaskButtons from "./displayEditTaskButtons";
import { appendEditedElement } from "./addEditButtonsSelected_EL.js";
import createTaskFromTaskCardData from "./createTaskFromTaskCardData";
import { editTask } from "./projectArray";

function showTasksEditButtonEL() {
    const mainContainer = document.querySelector('main');
    const cardNodeArray = document.querySelectorAll(".card");
    const cardArray = Array.from(cardNodeArray);
    let previousID;
    let previousCard;
    // let currentCard;
    // console.log(cardArray);

    const removeEditButtons = (event) => {

        event.preventDefault();
        let cards = document.querySelectorAll('.card');
        let buttons = document.querySelectorAll(".taskGridButtons");
        // Removed Edit Buttons
        let i;
        for (i = 0; i < buttons.length; i++) {
            let shownButton = buttons[i];
            shownButton.remove()
        }
        // Remove Grid Styling
        cards.forEach((card) => {
            card.classList.remove('cardGrid')
        }); 
        previousID = undefined;          
    }

    cardArray.forEach((card) => {
        card.addEventListener('click', (e) => {

            // Allow for click on any area of card to activate
            e.stopImmediatePropagation();
             let cardID = card.getAttribute('data-id');
            //  console.log(e.target);
            //  console.log(cardID);
            //  console.log(previousID);
             if (!(previousID == undefined)) {
                if (!(cardID == previousID)) {           
                    removeEditButtons(e);
                    appendEditedElement(e);

                    let editedTask = createTaskFromTaskCardData(previousCard);
                    // console.log(editedTask);
                    previousCard = undefined;
                    editTask(editedTask);
                }
             }
      


            // let cardID = divCardID.getAttribute('data-id');

            // If edit buttons aren't displayed > Display Edit Buttons
            const buttons = card.querySelectorAll('.taskGridButtons');
            // Show the Edit Buttons if none are showing
            if (buttons.length < 1) {
                displayEditTaskButtons(card);
                previousID = cardID;
                previousCard = card;
                // console.log(`PreviousCard`);
                // console.log(previousCard);
                // console.log(`PreviousCard`);
            }

        }, {once: false});
    })

    // Toggles Show class when clicking anywhere ELSE on window
    window.addEventListener('click', (e) => {
        removeEditButtons(e);
        appendEditedElement(e);
        // Check to prevent error
        if (!(previousCard == undefined)) {
            let editedTask = createTaskFromTaskCardData(previousCard);
            // console.log(editedTask);
            // Reset to prevent reallocation
            previousCard = undefined;
            // Edit masterArray with edited task
            editTask(editedTask);
        }
    })

}

export default showTasksEditButtonEL;