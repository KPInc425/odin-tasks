import displayProjectLibrary from "./displayProjectLibrary";
import showProjectsEditButtonEventListeners from "./showProjectsEditButtons_EL";
import showSelectedProjectTasksEL from "./showSelectedProject_EL";

function allProjectsEventListener(projectArray) {
    const mainContainer = document.querySelector('main');
    // const headerContainer = document.querySelector('header');
    const mainMenuButton = document.querySelector('.dropDownButton');
    const allProjectsButton = document.getElementById('allProjects');

    allProjectsButton.addEventListener('click', () => {
        mainContainer.innerHTML = "";
        // headerContainer.innerHTML = "";
        displayProjectLibrary(projectArray, mainContainer);
        // console.log(projectArray);
        mainMenuButton.textContent = "Projects Menu";
        // showProjectsEditButtonEventListeners();
        showSelectedProjectTasksEL(projectArray);
    })
};

export default allProjectsEventListener;