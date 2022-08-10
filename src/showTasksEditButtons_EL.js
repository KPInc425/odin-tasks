import displayEditTaskButtons from "./displayEditTaskButtons";
import { appendEditedElement } from "./addEditButtonsSelected_EL.js";
import createTaskFromTaskCardData from "./createTaskFromTaskCardData";
import { editTask, changeTaskProject } from "./projectArray";
import { displayHiddenTaskElements, hideHiddenTaskElements } from "./hiddenTaskElementFunctions.js";

function showTasksEditButtonEL() {
    const mainContainer = document.querySelector('main');
    const cardNodeArray = document.querySelectorAll(".card");
    const cardArray = Array.from(cardNodeArray);
    let previousID;
    let previousCard;
    let previousProject;

    const removeEditButtons = (event) => {

        event.preventDefault();
        let cards = document.querySelectorAll('.card');
        let buttons = document.querySelectorAll(".taskGridButtons");
        let btnDelete = document.querySelector('.deleteTask');
        // console.log(btnDelete);
        if (btnDelete != null) {
            btnDelete.remove();
        }

        // Removed Edit Buttons
        for (let i = 0; i < buttons.length; i++) {
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
             if (!(previousID == undefined)) {
                if (!(cardID == previousID)) { 
                    hideHiddenTaskElements(previousCard);          
                    removeEditButtons(e);
                    appendEditedElement(e);

                    let editedTask = createTaskFromTaskCardData(previousCard);
                    // console.log(editedTask);
                    
                    if (!(editedTask.taskProject == previousProject)) {
                        console.log("Changed Project");
                        changeTaskProject(previousProject, editedTask);
                        console.log(previousCard);
                        // previousCard.classList.add('hidden');
                        previousCard.remove();
                        // Reset to prevent reallocation
                        previousCard = undefined;
                    } else {
                        editTask(editedTask);
                        previousCard = undefined;
                    }
                }
             }

            // If edit buttons aren't displayed > Display Edit Buttons
            const buttons = card.querySelectorAll('.taskGridButtons');
            // Show the Edit Buttons if none are showing
            if (buttons.length < 1) {
                displayHiddenTaskElements(card);
                displayEditTaskButtons(card);
                previousID = cardID;
                previousCard = card;
                previousProject = card.querySelector('.taskProject').innerHTML.substr(16);
            }

        }, {once: false});
    })

    // Toggles Show class when clicking anywhere ELSE on window
    window.addEventListener('click', (e) => {
        // e.stopImmediatePropagation();
        // Don't remove edit buttons or append data if datetime-local element clicked
        // (This seems to work, but also seems a lil dirty(needed for NewTask Date selection to work))
        if (!(e.target.type === 'datetime-local')) {
            // console.log("it works?");
            hideHiddenTaskElements(previousCard);
            removeEditButtons(e);
            appendEditedElement(e);
        }
        
        // Check to prevent error
        if (!(previousCard == undefined)) {
            let editedTask = createTaskFromTaskCardData(previousCard);
            // console.log(editedTask.taskProject);
            if (!(editedTask.taskProject == previousProject)) {
                console.log("Changed Project");
                changeTaskProject(previousProject, editedTask);
                console.log(previousCard);
                // previousCard.classList.add('hidden');
                previousCard.remove();
                // Reset to prevent reallocation
                previousCard = undefined;
            } else {
                editTask(editedTask);
                // Reset to prevent reallocation
                previousCard = undefined;   
            }
        }
    })

}

export default showTasksEditButtonEL;