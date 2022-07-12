// DropDown Menu functionality                                                                                                                                                                                                                                                                                                                                     
function mainMenuEventListener() {
    const menuButton = document.querySelector('.dropDownButton');
    const dropDownMenuContainer = document.querySelector('.dropDownContent');

    menuButton.addEventListener('click', () => {
        dropDownMenuContainer.classList.toggle('show');
    });

    // Toggles Show class when clicking anywhere ELSE on window
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropDownButton')) {
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