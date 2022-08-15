import { el_addSelectedProjectElement } from "./el_addSelectedProjectElement";

function displayEditProjectButtons(projectCard) {
    console.log("Initiate Edit Project...");
    // console.log(projectCard);

    const btnCheckArray = projectCard.querySelectorAll('.projectGridButtons');


    // Check if buttons already exist
    if (!btnCheckArray.length > 0) {
        projectCard.classList.add('cardGrid');

        const btnEditProjectTitle = document.createElement('button');
        btnEditProjectTitle.innerText = "+";
        btnEditProjectTitle.classList.add('projectGridButtons');
        btnEditProjectTitle.classList.add('editProjectTitle');
        btnEditProjectTitle.setAttribute('title', 'Edit Project Title');
    
        const btnEditProjectDescription = document.createElement('button');
        btnEditProjectDescription.innerText = "+";
        btnEditProjectDescription.classList.add('projectGridButtons');
        btnEditProjectDescription.classList.add('editProjectDescription');
        btnEditProjectDescription.setAttribute('title', 'Edit Project Description');
    
        const btnEditProjectPriority = document.createElement('button');
        btnEditProjectPriority.innerText = "+";
        btnEditProjectPriority.classList.add('projectGridButtons');
        btnEditProjectPriority.classList.add('editProjectPriority');
        btnEditProjectPriority.setAttribute('title', 'Edit Project Priority');
    

    
        projectCard.appendChild(btnEditProjectTitle);
        projectCard.appendChild(btnEditProjectDescription);
        projectCard.appendChild(btnEditProjectPriority);   
        
    
        // // Get Card Unique ID
        // const cardID = projectCard.querySelector('[data-id]').getAttribute('data-id');
        // console.log(cardID);
    
    }

    el_addSelectedProjectElement(projectCard);
}

export default displayEditProjectButtons;