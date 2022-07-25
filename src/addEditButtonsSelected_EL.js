function addEditButtonSelectedEL(taskCard) {

    // Get Button Array 
    let btnEditArray = taskCard.querySelectorAll('.taskGridButtons');
    
    // Get Card Unique ID
    const cardID = taskCard.querySelector('[data-id]').getAttribute('data-id');
    
    btnEditArray.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            let classArray = button.className.split("edit");
            let classToEdit = classArray[1].toLowerCase();
            console.log(classToEdit);
            console.log(cardID);
            



        }, {once: false})
    })
    // console.log(buttons.length);
};

export default addEditButtonSelectedEL;