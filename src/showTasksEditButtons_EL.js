import displayEditTaskButtons from "./displayEditTaskButtons";

// function addEditButtonSelectedEL(buttons, cardID) {
    
//     buttons.forEach((button) => {
//         button.addEventListener('click', (e) => {
//             e.stopImmediatePropagation()
//             console.log(button);
//             console.log(cardID);

//         }, {once: false})
//     })
//     // console.log(buttons.length);
// };

function showTasksEditButtonEL() {
    const mainContainer = document.querySelector('main');
    const cardNodeArray = document.querySelectorAll(".card");
    const cardArray = Array.from(cardNodeArray);
    // console.log(cardArray);

    cardArray.forEach((card) => {
        card.addEventListener('click', (e) => {
            // console.log(card);
            // Allow for click on any area of card to activate
            e.stopImmediatePropagation();
            let divCardID = card.querySelector('div:last-of-type');
            // console.log(divCardID);
            let cardID = divCardID.getAttribute('data-id');

            // If edit buttons aren't displayed > Display Edit Buttons
            const buttons = card.querySelectorAll('.taskGridButtons');
            // console.log(e.target);
            // console.log(buttons);
            if (buttons.length < 1) {
                // e.stopPropagation();
                displayEditTaskButtons(card);
            } else {
                // console.log(buttons);
                // addEditButtonSelectedEL(buttons, cardID);
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
            };                
        }, {once: false});
    })
}

export default showTasksEditButtonEL;