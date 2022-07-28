function addEditButtonSelectedEL(taskCard) {

    // Get Button Array 
    let btnEditArray = taskCard.querySelectorAll('.taskGridButtons');
    
    // Get Card Unique ID
    const cardID = taskCard.querySelector('[data-id]').getAttribute('data-id');

    let classToEdit;
    let elementToEdit;
    let elementToEditsParent;
    let userInputBox;

    const appendEditedElement = (event) => {
        console.log(userInputBox);
        if (!(userInputBox == undefined)) {
            if (!event.target.matches(`.${classToEdit}`)) {
                console.log("Not same button....");
                elementToEdit.innerText = userInputBox.value;
                elementToEditsParent.innerHTML = "";
                elementToEditsParent.appendChild(elementToEdit);
                // Save to Local
            };  
        }     
    } 

    
    btnEditArray.forEach((button) => {

        button.addEventListener('click', (e) => {

            e.stopImmediatePropagation()
            // Get element to edit (splits after "edit" which will give the element title)
            let classArray = button.className.split("edit");
            // Make string into proper format
            classToEdit = classArray[1][0].toLowerCase() + classArray[1].slice(1); 
            // console.log(classToEdit);
            // console.log(cardID);
            console.log(`classToEdit: ${classToEdit}`);

            // console.log(taskCard);
            elementToEdit = taskCard.querySelector(`.${classToEdit}`);
            console.log(elementToEdit);
            elementToEditsParent = elementToEdit.parentElement;

            // TESTING
            // console.log(classToEdit);
            // console.log(elementToEdit);
            // console.log(elementToEditsParent);
            // TESTING

            // Display proper user input element based on selection
            
            if ((classToEdit === 'taskDueDate') || (classToEdit === 'taskStartDate')) {
                console.log('Display Date Widget')
            } else if ((classToEdit === 'taskPriority')) {
                console.log('Display Radio Buttons');
            } else if ((classToEdit === 'taskProject') ) { 
                console.log('Project Selection');
            } else {
                // Create Input box in place of data element
                userInputBox = document.createElement('input');
                userInputBox.classList.add('userEditInput');
                userInputBox.value = elementToEdit.innerText;
                // Clear parents html to add new input element
                elementToEditsParent.innerHTML = "";
                elementToEditsParent.appendChild(userInputBox);
                // console.log(elementToEdit);
                userInputBox.addEventListener('keyup', (event) => {
                    event.preventDefault();
                    console.log(event.key);
                    if (event.key === "Enter") {
                        appendEditedElement(event);
                    }
                    
                })
            }            
        }, {once: false})
    })

   

    // Toggles Show class when clicking anywhere ELSE on window
    window.addEventListener('click', appendEditedElement);
    // console.log(buttons.length);
};

export default addEditButtonSelectedEL;