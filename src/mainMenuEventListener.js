function mainMenuEventListener() {
    const menuButton = document.querySelector('.dropDownButton');
    const dropDownMenuContainer = document.querySelector('.dropDownContent');

    menuButton.addEventListener('click', () => {
        dropDownMenuContainer.classList.toggle('show');
    });
    // Toggles Show class when clicking anywhere ELSE on window
    window.onclick = function(event) {
        if (!event.target.matches('.dropDownButton')) {
            const dropdowns = document.getElementsByClassName("dropDownContent");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropDown = dropdowns[i];
                if (openDropDown.classList.contains('show')) {
                    openDropDown.classList.remove('show');
                }
            }
        }
    }
};

export default mainMenuEventListener;