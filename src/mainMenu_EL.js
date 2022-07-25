// DropDown Menu functionality                                                                                                                                                                                                                                                                                                                                     
function mainMenuEventListener() {
    const menuButton = document.querySelector('.dropDownButton');
    const dropDownMenuContainer = document.querySelector('.dropDownContent');

    menuButton.addEventListener('mouseover', () => {
        dropDownMenuContainer.classList.add('show');
    });

    // Removes Show class when hovering anywhere ELSE on window
    window.addEventListener('mouseover', (event) => {
        if (!event.target.matches('.menuItem')) {
            const dropDownsNodeList = document.getElementsByClassName("dropDownContent");
            let i;
            for (i = 0; i < dropDownsNodeList.length; i++) {
                let openDropDown = dropDownsNodeList[i];
                if (openDropDown.classList.contains('show')) {
                    openDropDown.classList.remove('show');
                }
            }
        };
    });
}

export default mainMenuEventListener;