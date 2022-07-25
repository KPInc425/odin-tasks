function addEditButtonSelectedEL(buttons, cardID) {
    
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            console.log(button);
            console.log(cardID);

        }, {once: false})
    })
    // console.log(buttons.length);
};

export default addEditButtonSelectedEL;