function addEditButtonSelectedEL(taskCard) {

    // Get Button Array 
    let btnEditArray = taskCard.querySelectorAll('.taskGridButtons');
    
    // Get Card Unique ID
    const cardID = taskCard.querySelector('[data-id]').getAttribute('data-id');

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

    // Will clear parent element > set element being edited's new value to userInputBox value > append to parent element
    const appendEditedElement = (event) => {
        if (openInputElementArray.length > 0) {
            // if (!(userDateInput == undefined)) {
            //     console.log("Date Input Used");
            // }
            console.log(userDateInput);
            console.log(userInputBox);
            console.log(openInputElementArray);
            for (let i = 0; i < openInputElementArray.length; i++) {
                
                if (openInputElementArray[i].className == 'userDateInput') {

                    elementToEditArray[i].innerText = new Date(openInputElementArray[i].value).toLocaleString();

                } else if (openInputElementArray[i].value.length < 3) {
                    elementToEditArray[i].innerText = openInputElementArray[i].placeholder;
                } else {
                    elementToEditArray[i].innerText = openInputElementArray[i].value;
                }
                
                    
                elementToEditsParentArray[i].innerHTML = "";
                elementToEditsParentArray[i].appendChild(elementToEditArray[i]);
                //Save to Local
            }
            openInputElementArray = [];
            console.log(openInputElementArray);
        }
        
        // if (!(userDateInput == undefined)) {
        //     for (let i = 0; i < openDateInputArray.length; i++) {
        //         elementToEditArray[i].innerText = new Date(openDateInputArray[i].value);
        //         elementToEditsParentArray[i].innerHTML = "";
        //         elementToEditsParentArray[i].appendChild(elementToEditArray[i]);
        //         //Save to Local
        //     }
        // }
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

            // query element to edit from task card based on class given from button press
            elementToEdit = taskCard.querySelector(`.${classToEdit}`);
            elementToEditArray.push(elementToEdit);
            console.log(elementToEdit);
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
                    // console.log(isoDate);
                    // console.log('2017-06-01T08:30');
                    userDateInput.value = isoDate;
                    userDateInput.placeholder = elementToEdit.innerHTML;
                    userDateInput.classList.add('userDateInput');
                    // console.log(elementToEdit.innerHTML);

                    // Clear parents html to add new input element
                    elementToEditsParent.innerHTML = "";
                    elementToEditsParent.appendChild(userDateInput);
                    userDateInput.focus();

                    // userDateInput.addEventListener('keyup', (event) => {
                    //     event.preventDefault();
                    //     // console.log(event.key);
                    //     if (event.key === "Enter") {
                    //         appendEditedElement(event);
                    //     }  
                    // })
                    
                    openInputElementArray.push(userDateInput);
                    // openInputElementArray.push(new Date(userDateInput.value).toString());
                    // console.log(new Date(userDateInput.value).toString());
                    // console.log(openInputElementArray);
                    // openDateInputArray.push(userDateInput);
                } else if ((classToEdit === 'taskPriority')) {
                    console.log('Display Radio Buttons');
                } else if ((classToEdit === 'taskProject') ) { 
                    console.log('Project Selection');
                } else {
                    // Create Input box in place of data element
                    userInputBox = document.createElement('input');
                    userInputBox.classList.add('userTextInput');
                    userInputBox.placeholder = elementToEdit.innerText;
                    
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
                    console.log(openInputElementArray);
                } 
            }

            // TESTING
            // console.log(classToEdit);
            // console.log(elementToEdit);
            // console.log(elementToEditsParent);
            // TESTING

            // Display proper user input element based on selection                       
        }, {once: false})
    })

   

    // Toggles Show class when clicking anywhere ELSE on window
    // These might be getting added over and over again.
    window.addEventListener('click', appendEditedElement);
    taskCard.addEventListener('click', appendEditedElement);
    // console.log(buttons.length);
};

export default addEditButtonSelectedEL;