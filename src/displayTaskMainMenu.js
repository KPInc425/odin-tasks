function displayTaskMainMenu(displayContainer) {
    const dropDownContainer = document.createElement('div');
    dropDownContainer.classList.add('dropDown');

    const dropDownButton = document.createElement('button');
    dropDownButton.classList.add('dropDownButton');
    dropDownButton.innerText = "Tasks Menu";

    const dropItemsContainer = document.createElement('div');
    dropItemsContainer.id = "dropDownItemsContainer";
    dropItemsContainer.classList.add('dropDownContent');

    const menuItem1 = document.createElement('a');
    menuItem1.setAttribute('href', "#")
    menuItem1.id = "allProjects";
    menuItem1.innerText = "All Projects";

    const menuItem2 = document.createElement('a');
    menuItem2.setAttribute('href', "#")
    menuItem2.id = "menuItem2";
    menuItem2.innerText = "MenuItem2";

    const menuItem3 = document.createElement('a');
    menuItem3.setAttribute('href', "#")
    menuItem3.id = "menuItem3";
    menuItem3.innerText = "MenuItem3";

    dropItemsContainer.appendChild(menuItem1);
    dropItemsContainer.appendChild(menuItem2);
    dropItemsContainer.appendChild(menuItem3);

    dropDownContainer.appendChild(dropDownButton);
    dropDownContainer.appendChild(dropItemsContainer);

    displayContainer.appendChild(dropDownContainer);
};

export default displayTaskMainMenu;