import displayEditTaskButtons from "./displayEditTaskButtons";

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
            // Show the Edit Buttons if none are showing
            if (buttons.length < 1) {
                displayEditTaskButtons(card);
            }
        }, {once: false});

        

        // const removeEditButtons = (event) => {

        //     event.preventDefault();

        //     let buttons = card.querySelectorAll(".taskGridButtons");

        //     let i;
        //     for (i = 0; i < buttons.length; i++) {
        //         let shownButton = buttons[i];

        //         shownButton.remove()
        //     }
        //     card.classList.remove('cardGrid');    
        //     // window.removeEventListener('click', removeEditButtons);         
        // }



        // // Toggles Show class when clicking anywhere ELSE on window
        // window.addEventListener('click', removeEditButtons);
    })
        // Toggles Show class when clicking anywhere ELSE on window
        window.addEventListener('click', (event) => {

            event.preventDefault();
            let cards = document.querySelectorAll('.card');
            let buttons = document.querySelectorAll(".taskGridButtons");

            let i;
            for (i = 0; i < buttons.length; i++) {
                let shownButton = buttons[i];

                shownButton.remove()
            }
            cards.forEach((card) => {
                card.classList.remove('cardGrid')
            });    
            // window.removeEventListener('click', removeEditButtons);         
        });
}

export default showTasksEditButtonEL;