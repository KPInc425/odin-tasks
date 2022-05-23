import displayProjectLibrary from "./displayProjectLibrary";

function allProjectsEventListener(projectArray) {
    const mainContainer = document.querySelector('main');
    const allProjectsButton = document.getElementById('allProjects');

    allProjectsButton.addEventListener('click', () => {
        mainContainer.innerHTML = "";
        displayProjectLibrary(projectArray, mainContainer);
    })
};

export default allProjectsEventListener;