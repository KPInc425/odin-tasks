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
    let chosenPriority = "Low";


// Will clear parent element > set element being edited's new value to userInputBox value > append to parent element
function appendEditedElement(e) {
    // console.log(e.target);
    // console.log(openInputElementArray.length)
    if (openInputElementArray.length > 0) {
        let i;
        for (i = 0; i < openInputElementArray.length; i++) {
            // console.log(openInputElementArray[i]);
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
                    // changeTaskProject();
                    // continue;
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
                    // console.log('Display Date Widget')
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
                    // console.log('Display Radio Buttons');
                    // create Radio Buttons container
                    const btnInputForm = document.createElement('div');
                    btnInputForm.classList.add('inputPriorityForm');
                    // create btn Buttons for Priority Choices
                    const btnLowPriority = document.createElement('button');
                    btnLowPriority.textContent = "Low";
                    btnLowPriority.value = "Low";
                    btnLowPriority.name = "priority";
                    // btnLowPriority.checked = "checked";

                    const btnMediumPriority = document.createElement('button');
                    btnMediumPriority.textContent = "Medium";
                    btnMediumPriority.value = "Medium";
                    btnMediumPriority.name = "priority";

                    const btnHighPriority = document.createElement('button');
                    btnHighPriority.textContent = "High";
                    btnHighPriority.value = "High";
                    btnHighPriority.name = "priority";

                    btnInputForm.appendChild(btnLowPriority);
                    btnInputForm.appendChild(btnMediumPriority);
                    btnInputForm.appendChild(btnHighPriority);

                    let btnsArray = [btnLowPriority,btnMediumPriority,btnHighPriority];

                    btnsArray.forEach((btn) => {
                        btn.addEventListener('click', () => {
                            console.log("clicked btn");
                            console.log(taskCard);
                            console.log(btn.value);
                            chosenPriority = btn.value;
                            console.log(chosenPriority);
                            taskCard.classList.remove('lowPriority');
                            if (chosenPriority == 'High') {
                                taskCard.classList.remove('lowPriority');
                                taskCard.classList.remove('mediumPriority');
                                // taskCard.classList.remove('highPriority');
                                taskCard.classList.add('highPriority');
                            } else if (chosenPriority == 'Medium') {
                                // taskCard.style.backgroundColor = "rgba(180, 182, 50, 0.719);;"
                                taskCard.classList.remove('lowPriority');
                                // taskCard.classList.remove('mediumPriority');
                                taskCard.classList.remove('highPriority');
                                taskCard.classList.add('mediumPriority');
                            } else if (chosenPriority == 'Low') {
                                // taskCard.style.backgroundColor = "rgba(58, 207, 233, 0.637);"
                                // taskCard.classList.remove('lowPriority');
                                taskCard.classList.remove('mediumPriority');
                                taskCard.classList.remove('highPriority');
                                taskCard.classList.add('lowPriority');
                            }
                        })
                    })

                    // Clear parents html to add new input element
                    elementToEditsParent.innerHTML = "";
                    elementToEditsParent.appendChild(btnInputForm);

                    openInputElementArray.push(btnInputForm);

                } else if ((classToEdit === 'taskProject') ) { 
                    // console.log('Project Selection');
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