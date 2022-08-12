// Manipulateds DOM to add Main menu
function displayTaskMainMenu(displayContainer) {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const dropDownButton = document.createElement('button');
    dropDownButton.classList.add('dropDownButton');
    dropDownButton.classList.add('menuItem');
    dropDownButton.innerText = "Menu";

    const dropItemsContainer = document.createElement('div');
    dropItemsContainer.id = "dropDownItemsContainer";
    dropItemsContainer.classList.add('dropDownContent');

    const menuItem1 = document.createElement('a');
    menuItem1.setAttribute('href', "#")
    menuItem1.classList.add('menuItem');
    menuItem1.id = "allProjects";
    menuItem1.innerText = "All Projects";

    const menuItem2 = document.createElement('a');
    menuItem2.setAttribute('href', "#")
    menuItem2.classList.add('menuItem');
    menuItem2.id = "createNewProject";
    menuItem2.innerText = "Create New Project";

    const menuItem3 = document.createElement('a');
    menuItem3.setAttribute('href', "#")
    menuItem3.classList.add('menuItem');
    menuItem3.classList.add('danger');
    menuItem3.id = "deleteAllTasks";
    menuItem3.innerText = "DELETE ALL DATA";

    dropItemsContainer.appendChild(menuItem1);
    dropItemsContainer.appendChild(menuItem2);
    dropItemsContainer.appendChild(menuItem3);

    menuContainer.appendChild(dropDownButton);
    menuContainer.appendChild(dropItemsContainer);

    displayContainer.appendChild(menuContainer);
};

export default displayTaskMainMenu;