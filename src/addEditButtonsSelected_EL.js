function addEditButtonSelectedEL(taskCard) {

    // Get Button Array 
    let btnEditArray = taskCard.querySelectorAll('.taskGridButtons');
    
    // Get Card Unique ID
    const cardID = taskCard.querySelector('[data-id]').getAttribute('data-id');
    
    btnEditArray.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            let classArray = button.className.split("edit");
            // Make string into proper format
            let classToEdit = classArray[1][0].toLowerCase() + classArray[1].slice(1); 
            console.log(classToEdit);
            console.log(cardID);

            // console.log(taskCard);
            let elementToEdit = taskCard.querySelector(`.${classToEdit}`);
            console.log(elementToEdit);
            console.log(elementToEdit.parentElement);



        }, {once: false})
    })
    // console.log(buttons.length);
};

export default addEditButtonSelectedEL;