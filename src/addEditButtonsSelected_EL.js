function addEditButtonSelectedEL(taskCard) {

    // Get Button Array 
    let btnEditArray = taskCard.querySelectorAll('.taskGridButtons');
    
    // Get Card Unique ID
    const cardID = taskCard.querySelector('[data-id]').getAttribute('data-id');

    let classToEdit;
    let elementToEdit;
    let elementToEditsParent;
    
    btnEditArray.forEach((button) => {
        button.addEventListener('click', (e) => {
            
            if (classToEdit === undefined) { 
                

                e.stopImmediatePropagation()
                let classArray = button.className.split("edit");
                // Make string into proper format
                classToEdit = classArray[1][0].toLowerCase() + classArray[1].slice(1); 
                console.log(classToEdit);
                console.log(cardID);

                // console.log(taskCard);
                elementToEdit = taskCard.querySelector(`.${classToEdit}`);
                elementToEditsParent = elementToEdit.parentElement;
                console.log(classToEdit);
                console.log(elementToEdit);
                console.log(elementToEditsParent);

                // Display proper user input element based on selection
                
                if ((classToEdit === 'taskDueDate') || (classToEdit === 'taskStartDate')) {
                    console.log('Display Date Widget')
                } else if ((classToEdit === 'taskPriority')) {
                    console.log('Display Radio Buttons');
                } else if ((classToEdit === 'taskProject') ) { 
                    console.log('Project Selection');
                } else {
                    // Create Input box in place of data element
                    let userInputBox = document.createElement('input');
                    userInputBox.classList.add('userEditInput');
                    userInputBox.value = elementToEdit.innerText;
                    elementToEditsParent.innerHTML = "";
                    elementToEditsParent.appendChild(userInputBox);
                }
            // Dont think this is the solution
            } else {
                console.log(classToEdit);
                console.log(elementToEdit);

            }
            
        }, {once: false})
    })
    // console.log(buttons.length);
};

export default addEditButtonSelectedEL;