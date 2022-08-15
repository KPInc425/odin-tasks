import displayProjectLibrary from "./displayProjectLibrary.js";
import displayProjectTitle from "./displayProjectTitle.js";
import showSelectedProjectTasksEL from "./showSelectedProject_EL";
import { getProjectsArray } from "./projectArray.js";
import { showProjectsEditButton_EL } from "./showProjectsEditButtons_EL.js";


function allProjectsEventListener() {
    const mainContainer = document.querySelector('main');
    const allProjectsButton = document.getElementById('allProjects');

    allProjectsButton.addEventListener('click', () => {
        mainContainer.innerHTML = "";
        displayProjectTitle("All Projects");
        displayProjectLibrary(getProjectsArray(), mainContainer);
        showSelectedProjectTasksEL(getProjectsArray());
        showProjectsEditButton_EL();
    })
};

export default allProjectsEventListener;