import displayProjectLibrary from "./displayProjectLibrary.js";
import displayProjectTitle from "./displayProjectTitle.js";
import showProjectsEditButtonEventListeners from "./showProjectsEditButtons_EL.js";
import showSelectedProjectTasksEL from "./showSelectedProject_EL";
import { projectArray } from "./projectArray.js";


function allProjectsEventListener() {
    const mainContainer = document.querySelector('main');
    // const headerContainer = document.querySelector('header');
    // const mainMenuButton = document.querySelector('.dropDownButton');
    const allProjectsButton = document.getElementById('allProjects');

    console.log(projectArray());

    allProjectsButton.addEventListener('click', () => {
        mainContainer.innerHTML = "";
        // headerContainer.innerHTML = "";
        displayProjectTitle("All Projects");
        displayProjectLibrary(projectArray(), mainContainer);
        // console.log(projectArray);
        // mainMenuButton.textContent = "Projects Menu";
        // showProjectsEditButtonEventListeners();
        showSelectedProjectTasksEL(projectArray());
    })
};

export default allProjectsEventListener;