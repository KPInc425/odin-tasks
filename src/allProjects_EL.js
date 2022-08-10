import displayProjectLibrary from "./displayProjectLibrary.js";
import displayProjectTitle from "./displayProjectTitle.js";
import showSelectedProjectTasksEL from "./showSelectedProject_EL";
import { getProjectsArray } from "./projectArray.js";


function allProjectsEventListener() {
    const mainContainer = document.querySelector('main');
    const allProjectsButton = document.getElementById('allProjects');

    allProjectsButton.addEventListener('click', () => {
        mainContainer.innerHTML = "";
        displayProjectTitle("All Projects");
        displayProjectLibrary(getProjectsArray(), mainContainer);
        showSelectedProjectTasksEL(getProjectsArray());
    })
};

export default allProjectsEventListener;