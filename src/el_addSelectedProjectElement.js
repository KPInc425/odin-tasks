let classToEdit;
let elementToEdit;
let elementToEditArray = [];
let elementToEditsParent;
let elementToEditsParentArray = [];
let userInputBox;
let chosenPriority = "Low";
let openInputElementArray = [];

function appendEditedProjectElement() {
    if (openInputElementArray.length > 0) {
        for (let i = 0; i < openInputElementArray.length; i++) {
            if (openInputElementArray[i].className == 'inputPriorityForm') {
                elementToEditArray[i].textContent = chosenPriority + " Priority";
            } else if (openInputElementArray[i].value.length < 3) {
                elementToEditArray[i].textContent = openInputElementArray[i].placeholder;
            } else {
                elementToEditArray[i].textContent = openInputElementArray[i].value;
            }
            elementToEditsParentArray[i].innerHTML = "";
            elementToEditsParentArray[i].appendChild(elementToEditArray[i]);
        }
    }
    // Clean up 
    openInputElementArray = [];
    elementToEditArray = [];
    elementToEditsParentArray = [];
}



const el_addSelectedProjectElement = (projectCard) => {
     // Get Button Array 
    let btnEditArray = projectCard.querySelectorAll('.projectGridButtons');

    btnEditArray.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation();

            // Get element to edit (splits after "edit" which will give the element title)
            let classArray = btn.className.split("edit");
            console.log(classArray);
            // Make string into proper format
            classToEdit = classArray[1][0].toLowerCase() + classArray[1].slice(1); 
            console.log(`classToEdit: ${classToEdit}`);

            // query element to edit from task card based on class given from button press
            elementToEdit = projectCard.querySelector(`.${classToEdit}`);
            elementToEditArray.push(elementToEdit);
            console.log(elementToEdit);

            if (!(elementToEdit == null)) {
                elementToEditsParent = elementToEdit.parentElement;
                elementToEditsParentArray.push(elementToEditsParent);

                if ((classToEdit === 'projectPriority')) {
                    console.log('Display Radio Buttons');
                    // create Radio Buttons container
                    const btnInputForm = document.createElement('div');
                    btnInputForm.classList.add('inputPriorityForm');
                    // create btn Buttons for Priority Choices
                    const btnLowPriority = document.createElement('button');
                    btnLowPriority.textContent = "Low";
                    btnLowPriority.value = "Low";
                    btnLowPriority.name = "priority";


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
                            console.log(projectCard);
                            console.log(btn.value);
                            chosenPriority = btn.value;
                            console.log(chosenPriority);
                            projectCard.classList.remove('lowPriority');
                            if (chosenPriority == 'High') {
                                projectCard.classList.remove('lowPriority');
                                projectCard.classList.remove('mediumPriority');
                                // projectCard.classList.remove('highPriority');
                                projectCard.classList.add('highPriority');
                            } else if (chosenPriority == 'Medium') {
                                // projectCard.style.backgroundColor = "rgba(180, 182, 50, 0.719);;"
                                projectCard.classList.remove('lowPriority');
                                // projectCard.classList.remove('mediumPriority');
                                projectCard.classList.remove('highPriority');
                                projectCard.classList.add('mediumPriority');
                            } else if (chosenPriority == 'Low') {
                                // projectCard.style.backgroundColor = "rgba(58, 207, 233, 0.637);"
                                // projectCard.classList.remove('lowPriority');
                                projectCard.classList.remove('mediumPriority');
                                projectCard.classList.remove('highPriority');
                                projectCard.classList.add('lowPriority');
                            }
                        })
                    })

                    // Clear parents html to add new input element
                    elementToEditsParent.innerHTML = "";
                    elementToEditsParent.appendChild(btnInputForm);

                    openInputElementArray.push(btnInputForm);

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
                            appendEditedProjectElement(event);
                        }
                        
                    })
                    //Add to array of open inputs
                    openInputElementArray.push(userInputBox);
                    // console.log(openInputElementArray);
                } 
            }     
        })
    })

    window.addEventListener('click', appendEditedProjectElement);
}

export {
    el_addSelectedProjectElement,
    appendEditedProjectElement,
}