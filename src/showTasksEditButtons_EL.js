import displayEditTaskButtons from "./displayEditTaskButtons";
// import getProjectDataFromCards from "./getProjectDataFromCards.js";

function showTasksEditButtonEL() {
    const mainContainer = document.querySelector('main');
    const cardNodeArray = document.querySelectorAll(".card");
    const cardArray = Array.from(cardNodeArray);
    // console.log(cardArray);

    cardArray.forEach((card) => {
        card.addEventListener('click', (e) => {

            // Allow for click on any area of card to activate
            e.stopImmediatePropagation();
            let divCardID = card.querySelector('div:last-of-type');

            let cardID = divCardID.getAttribute('data-id');

            // If edit buttons aren't displayed > Display Edit Buttons
            const buttons = card.querySelectorAll('.taskGridButtons');

            if (buttons.length < 1) {

                displayEditTaskButtons(card);
            } 
        }, {once: false});

        



        // Toggles Show class when clicking anywhere ELSE on window
        window.addEventListener('click', (event) => {
            // console.log(event.target);
            event.preventDefault();
            if (!event.target.matches('.card')) {
                // console.log("NOT CARD!");
                let buttons = card.querySelectorAll(".taskGridButtons");
                // console.log(buttons);
                let i;
                for (i = 0; i < buttons.length; i++) {
                    let shownButton = buttons[i];
                    // console.log(shownButton);
                    shownButton.remove()
                }
                card.classList.remove('cardGrid');
                // Get Project Data from displayed project Tasks
                // getProjectDataFromCards();
                // replace master project array with possible edits
            };                
        }, {once: false});
    })
}

export default showTasksEditButtonEL;