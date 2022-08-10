import createProject from "./createProject";

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


const checkLocalStorage = () => {
    if (storageAvailable('localStorage')) {
        console.log('Local Storage is Available');
        return true;
    } else {
        console.log('No Local Storage Available');
        return false;
    }
}

const populateStorage = (projectsArray) => {
    // BLUNT FORCE METHOD SHOULD LIKELY BE CLEANED UP FOR MORE SPECIFICITY
    localStorage.clear();
    let index = 0;
    for (let project of projectsArray) {
        console.log(project);
        localStorage.setItem(`localProjectsArray[${index}]`, JSON.stringify(project));
        index++;
    }
    console.log(localStorage);
}

const importMainProjectsArray = () => {
    let mainProjectsArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        let tmpArr = JSON.parse(localStorage.getItem(`localProjectsArray[${i}]`));
        mainProjectsArray.push(tmpArr);
    }

    let index = 0;
    let tmpProjectArray = [];
    mainProjectsArray.forEach((project) => {
        // tmpProjectArray[index] = createProject(project.projectTitle, project.projectDescription, project.projectPriority);
        tmpProjectArray[index] = project;
        console.log(tmpProjectArray[index]);
        index++;
    })
    mainProjectsArray = tmpProjectArray
    return mainProjectsArray;
}

export {
    checkLocalStorage,
    populateStorage,
    importMainProjectsArray,
}