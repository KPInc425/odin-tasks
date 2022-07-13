import displayEditProjectButtons from "./displayEditProjectButtons";


function showProjectsEditButtonEventListeners () {
    const mainContainer = document.querySelector('main');
    const cardNodeArray = document.querySelectorAll(".card");
    const cardArray = Array.from(cardNodeArray);
    console.log(cardArray);

    cardArray.forEach((card) => {
        card.addEventListener('click', (e) => {
            console.log(card);
            e.stopPropagation();

            // Display Edit Buttons
            displayEditProjectButtons(card);

            // Toggles Show class when clicking anywhere ELSE on window
            window.addEventListener('click', (event) => {
                // console.log(event.target);
                if (!event.target.matches('.card')) {
                    console.log("NOT CARD!");
                    let buttons = card.querySelectorAll(".ProjectGridButtons");
                    // console.log(buttons);
                    let i;
                    for (i = 0; i < buttons.length; i++) {
                        let shownButton = buttons[i];
                        console.log(shownButton);
                        shownButton.remove()
                    }
                    card.classList.remove('ProjectGrid');
                    showProjectsEditButtonEventListeners();
                }
            })
        }, {once: true});
    })
}

export default showProjectsEditButtonEventListeners;