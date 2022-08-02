import displayEditTaskButtons from "./displayEditTaskButtons";

function showTasksEditButtonEL() {
    const mainContainer = document.querySelector('main');
    const cardNodeArray = document.querySelectorAll(".card");
    const cardArray = Array.from(cardNodeArray);
    let previousID;
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
        previousID = null;          
    }

    cardArray.forEach((card) => {
        card.addEventListener('click', (e) => {

            // Allow for click on any area of card to activate
            e.stopImmediatePropagation();
             let cardID = card.getAttribute('data-id');
             
             if (!(cardID == previousID)) {
                console.log(cardID);
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
                previousID = null;          
             }


            // let cardID = divCardID.getAttribute('data-id');

            // If edit buttons aren't displayed > Display Edit Buttons
            const buttons = card.querySelectorAll('.taskGridButtons');
            // Show the Edit Buttons if none are showing
            if (buttons.length < 1) {
                displayEditTaskButtons(card);
                previousID = cardID;
            }

        }, {once: false});
    })

    // Toggles Show class when clicking anywhere ELSE on window
    window.addEventListener('click', removeEditButtons);
}

export default showTasksEditButtonEL;