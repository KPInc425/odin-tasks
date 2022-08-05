import getProjectDataFromCards from "./createTaskFromTaskCardData.js";
import { getProjectList } from "./projectArray.js";

    let classToEdit;
    let elementToEdit;
    let elementToEditsParent;
    let userInputBox;
    let userDateInput;
    // Hold all the currently editable elements
    let openInputElementArray = [];
    // let openDateInputArray = [];
    let elementToEditArray = [];
    let elementToEditsParentArray = [];
    let chosenPriority;


// Will clear parent element > set element being edited's new value to userInputBox value > append to parent element
function appendEditedElement(e) {
    // console.log(e.target);
    console.log(openInputElementArray.length)
    if (openInputElementArray.length > 0) {
        let i;
        for (i = 0; i < openInputElementArray.length; i++) {
            console.log(openInputElementArray[i]);
            if (openInputElementArray[i].className == 'userDateInput') {

                elementToEditArray[i].textContent = new Date(openInputElementArray[i].value).toLocaleString();
            } else if (openInputElementArray[i].className == 'inputPriorityForm') {
                elementToEditArray[i].textContent = chosenPriority + " Priority";
            } else if (openInputElementArray[i].value.length < 3) {
                elementToEditArray[i].textContent = openInputElementArray[i].placeholder;
                if (openInputElementArray[i].className == 'userProjectInput') {
                    elementToEditArray[i].textContent = "This is part of " + openInputElementArray[i].placeholder;
                }
            } else {
                elementToEditArray[i].textContent = openInputElementArray[i].value;
                if (openInputElementArray[i].className == 'userProjectInput') {
                    elementToEditArray[i].textContent = "This is part of " + openInputElementArray[i].value;
                }
            }
                
            elementToEditsParentArray[i].innerHTML = "";
            elementToEditsParentArray[i].appendChild(elementToEditArray[i]);
        }
    }
    // Clean up 
    openInputElementArray = [];
    elementToEditArray = [];
    elementToEditsParentArray = [];
};

function addEditButtonSelectedEL(taskCard) {

    // Get Card Unique ID
    const cardID = taskCard.getAttribute('data-id');

    // Get Button Array 
    let btnEditArray = taskCard.querySelectorAll('.taskGridButtons');
    
    btnEditArray.forEach((button) => {

        button.addEventListener('click', (e) => {
            // console.log(e.target);

            e.stopImmediatePropagation()
            // Get element to edit (splits after "edit" which will give the element title)
            let classArray = button.className.split("edit");
            // Make string into proper format
            classToEdit = classArray[1][0].toLowerCase() + classArray[1].slice(1); 

            // console.log(`classToEdit: ${classToEdit}`);

            // query element to edit from task card based on class given from button press
            elementToEdit = taskCard.querySelector(`.${classToEdit}`);
            elementToEditArray.push(elementToEdit);
            // console.log(elementToEdit);
            // Check if element variable has been given a value
            if (!(elementToEdit == null)) {
                elementToEditsParent = elementToEdit.parentElement;
                elementToEditsParentArray.push(elementToEditsParent);
                // Task edit due/start date logic
                if ((classToEdit === 'taskDueDate') || (classToEdit === 'taskStartDate')) {
                    console.log('Display Date Widget')
                    userDateInput = document.createElement('input');
                    userDateInput.type = "datetime-local";
                    // Set timeZone offset
                    let tzOffSet = (new Date()).getTimezoneOffset() * 60000 //offset in milliseconds
                    // Format date into datetime-local format
                    let isoDate = new Date(new Date(elementToEdit.innerHTML) - tzOffSet).toISOString().slice(0,16);

                    userDateInput.value = isoDate;
                    userDateInput.placeholder = elementToEdit.innerHTML;
                    userDateInput.classList.add('userDateInput');


                    // Clear parents html to add new input element
                    elementToEditsParent.innerHTML = "";
                    elementToEditsParent.appendChild(userDateInput);
                    userDateInput.focus();
                    
                    openInputElementArray.push(userDateInput);

                } else if ((classToEdit === 'taskPriority')) {
                    console.log('Display Radio Buttons');
                    // create Radio Buttons container
                    const radioInputForm = document.createElement('form');
                    radioInputForm.classList.add('inputPriorityForm');
                    // create Radio Buttons for Priority Choices
                    const radioLowPriority = document.createElement('input');
                    radioLowPriority.type = "radio";
                    radioLowPriority.value = "Low";
                    radioLowPriority.name = "priority";
                    const radioMediumPriority = document.createElement('input');
                    radioMediumPriority.type = "radio";
                    radioMediumPriority.value = "Medium";
                    radioMediumPriority.name = "priority";
                    const radioHighPriority = document.createElement('input');
                    radioHighPriority.type = "radio";
                    radioHighPriority.value = "High";
                    radioHighPriority.name = "priority";

                    radioInputForm.appendChild(radioLowPriority);
                    radioInputForm.appendChild(radioMediumPriority);
                    radioInputForm.appendChild(radioHighPriority);

                    let radioArray = [radioLowPriority,radioMediumPriority,radioHighPriority];

                    radioArray.forEach((radioBtn) => {
                        radioBtn.addEventListener('click', () => {
                            console.log("clicked radio");
                            console.log(radioBtn.value);
                            chosenPriority = radioBtn.value;
                            console.log(chosenPriority);
                        })
                    })

                    // Clear parents html to add new input element
                    elementToEditsParent.innerHTML = "";
                    elementToEditsParent.appendChild(radioInputForm);

                    openInputElementArray.push(radioInputForm);

                } else if ((classToEdit === 'taskProject') ) { 
                    console.log('Project Selection');
                    //CLEAN UP THIS DUPLICATE CODE!!!!!!!!!!!!!!
                    let userInputProjectSelection = document.createElement('select');
                    userInputProjectSelection.classList.add('userProjectInput');
                    userInputProjectSelection.placeholder = elementToEdit.textContent.substr(16);

                    let currentProjectList = getProjectList();
                    let temp;


                    for (let i = 0; i < currentProjectList.length; i++) {
                        temp = document.createElement('option');
                        temp.value = currentProjectList[i];
                        temp.className = "projectChoice";
                        temp.innerText = currentProjectList[i];

                        userInputProjectSelection.appendChild(temp);
                    }
                
                    // Clear parents html to add new input element
                    elementToEditsParent.innerHTML = "";
                    elementToEditsParent.appendChild(userInputProjectSelection);
                    // console.log(elementToEdit);

                    openInputElementArray.push(userInputProjectSelection);

                } else {
                    // Create Input box in place of data element
                    userInputBox = document.createElement('input');
                    userInputBox.classList.add('userTextInput');
                    userInputBox.placeholder = elementToEdit.textContent;
                    
                    //CLEAN UP THIS DUPLICATE CODE!!!!!!!!!!!!!!
                    // Clear parents html to add new input element
                    elementToEditsParent.innerHTML = "";
                    elementToEditsParent.appendChild(userInputBox);
                    userInputBox.focus();
                    // console.log(elementToEdit);
                    userInputBox.addEventListener('keyup', (event) => {
                        event.preventDefault();
                        // console.log(event.key);
                        if (event.key === "Enter") {
                            appendEditedElement(event);
                        }
                        
                    })
                    //Add to array of open inputs
                    openInputElementArray.push(userInputBox);
                    // console.log(openInputElementArray);
                } 
            }                    
        }, {once: false})
    })

   // Append edited elements when clicked away from 
    window.addEventListener('click', appendEditedElement, {once: true});
};

export {
    addEditButtonSelectedEL,
    appendEditedElement,
}